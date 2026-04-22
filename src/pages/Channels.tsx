import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

interface Channel {
  name: string
}

interface Message {
  name: string
  channel_id: string
  user_name: string
}

export function Channels() {
  const [channels, setChannels] = useState<Channel[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [messagesLoading, setMessagesLoading] = useState(false)
  const [text, setText] = useState('')
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const fetchChannels = async () => {
      const { data, error } = await supabase.from('channels').select('*')

      if (error) {
        console.error('チャンネル取得エラー:', error)
        setLoading(false)
        return
      }

      setChannels(data ?? [])
      setLoading(false)
    }

    fetchChannels()
  }, [])

  useEffect(() => {
    if (!selectedChannelId) {
      setMessages([])
      return
    }

    setMessagesLoading(true)
    fetchMessages(selectedChannelId).then(() => setMessagesLoading(false))

    const channel = supabase.channel('messages')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        const newMsg = payload.new as Message
        if (newMsg.channel_id === selectedChannelId) {
          setMessages((prev) => [...prev, newMsg])
        }
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [selectedChannelId])

  const fetchMessages = async (channelId: string) => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('channel_id', channelId)
      .order('created_at', { ascending: true })

    if (error) {
      console.error('メッセージ取得エラー:', error)
      return
    }

    setMessages(data ?? [])
  }

  const handleSend = async () => {
    if (!text.trim() || !selectedChannelId) return

    setSending(true)

    const { error } = await supabase
      .from('messages')
      .insert({ name: text, channel_id: selectedChannelId, user_name: '自分' })

    if (error) {
      console.error('メッセージ投稿エラー:', error)
      setSending(false)
      return
    }

    setText('')
    setSending(false)
  }

  if (loading) {
    return <p>読み込み中...</p>
  }

  return (
    <div style={{ display: 'flex', maxWidth: 900, margin: '40px auto', fontFamily: 'sans-serif', gap: 24 }}>
      <div style={{ minWidth: 200 }}>
        <h2>チャンネル</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {channels.map((channel) => (
            <li
              key={channel.name}
              onClick={() => setSelectedChannelId(channel.name)}
              style={{
                padding: '10px 12px',
                cursor: 'pointer',
                borderRadius: 6,
                backgroundColor: selectedChannelId === channel.name ? '#e0e7ff' : 'transparent',
                fontWeight: selectedChannelId === channel.name ? 'bold' : 'normal',
              }}
            >
              # {channel.name}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        {!selectedChannelId ? (
          <p style={{ color: '#888' }}>チャンネルを選択してください</p>
        ) : (
          <>
            <h2># {selectedChannelId}</h2>
            {messagesLoading ? (
              <p>メッセージを読み込み中...</p>
            ) : messages.length === 0 ? (
              <p style={{ color: '#888' }}>メッセージがありません</p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {messages.map((msg, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
                    <strong>{msg.user_name}</strong>: {msg.name}
                  </li>
                ))}
              </ul>
            )}
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend() }}
                placeholder="メッセージを入力..."
                disabled={sending}
                style={{ flex: 1, padding: '8px 12px', fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }}
              />
              <button
                onClick={handleSend}
                disabled={sending || !text.trim()}
                style={{ padding: '8px 16px', fontSize: 16, borderRadius: 6, border: 'none', backgroundColor: '#4f46e5', color: '#fff', cursor: 'pointer' }}
              >
                送信
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
