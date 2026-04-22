import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'
import { Button } from './ui/button'

export function Header() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  if (!user) return null

  return (
    <header className="flex items-center justify-between border-b px-6 py-3">
      <h1 className="text-lg font-bold">チャット</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">{user.email}</span>
        <Button variant="destructive" size="sm" onClick={handleSignOut}>
          ログアウト
        </Button>
      </div>
    </header>
  )
}
