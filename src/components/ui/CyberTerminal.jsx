'use client'
import { useState, useRef, useEffect } from 'react'
import { Terminal, Shield, CheckCircle2, Play, Sparkles } from 'lucide-react'
import SplitFlapText from '@/components/ui/SplitFlapText'

const INITIAL_LOGS = [
  { type: 'dim', text: '[BOOT] Initializing REXER Imperial Cyber-Kernel v4.8...' },
  { type: 'dim', text: '[AUTH] Cryptographic Handshake: ECDSA-secp256k1 verified.' },
  { type: 'success', text: '[READY] Defense Matrix Online. 0 Active Breaches.' },
  { type: 'prompt', cmd: 'rexer --summary', text: '' },
  { type: 'response', text: 'REXER Studio // Flutter Architecture • Offensive Security • Fintech UI/UX' },
  { type: 'dim', text: 'Type "help" or click below for interactive commands.' },
]

const QUICK_COMMANDS = [
  'scan --target vello.app',
  'stack --inspect',
  'audit --cve',
  'contact',
  'clear',
]

export default function CyberTerminal() {
  const [logs, setLogs] = useState(INITIAL_LOGS)
  const [input, setInput] = useState('')
  const bodyRef = useRef(null)

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim()
    if (!cmd) return

    const newLogs = [...logs, { type: 'prompt', cmd, text: '' }]

    const lower = cmd.toLowerCase()
    if (lower === 'clear') {
      setLogs([])
      setInput('')
      return
    }

    if (lower === 'help') {
      newLogs.push(
        { type: 'response', text: 'AVAILABLE PROTOCOLS:' },
        { type: 'dim', text: '  scan --target <url>   : Run simulated CVE vulnerability assessment' },
        { type: 'dim', text: '  stack --inspect       : View full Claude + Supabase + Stripe architecture' },
        { type: 'dim', text: '  audit --cve           : Check recent CVE test suite pass rates' },
        { type: 'dim', text: '  pricing               : Open project estimator' },
        { type: 'dim', text: '  contact               : Get direct channels to @RexerLK' },
        { type: 'dim', text: '  clear                 : Wipe terminal screen' }
      )
    } else if (lower.startsWith('scan')) {
      newLogs.push(
        { type: 'warn', text: '⚡ Launching Burp Suite & OWASP API Security Scanner...' },
        { type: 'dim', text: '  [+] Port 443 TLS 1.3: CIPHER_ECDHE_RSA_WITH_AES_256_GCM_SHA384' },
        { type: 'dim', text: '  [+] Auth Token Header: Encrypted JWT + AES Payload' },
        { type: 'success', text: '  [✔] 0 High / 0 Critical CVEs detected. Institutional Grade A+' }
      )
    } else if (lower.startsWith('stack')) {
      newLogs.push(
        { type: 'response', text: 'ENGINEERING STACK DEPLOYED:' },
        { type: 'dim', text: '  • Frontend: Next.js 14 App Router + Framer Motion (Vercel/Netlify)' },
        { type: 'dim', text: '  • Mobile: Flutter 3.24 + Dart + Firebase + AES-256' },
        { type: 'dim', text: '  • Backend: Supabase Realtime PostgreSQL + Row-Level Security (RLS)' },
        { type: 'dim', text: '  • AI & Review: Claude 4.6 Coding Agent + CodeRabbit AI Linting' },
        { type: 'dim', text: '  • Monetization: Stripe Billing + Webhook Automation' }
      )
    } else if (lower.startsWith('audit')) {
      newLogs.push(
        { type: 'success', text: '✔ CVE-2025 Audit Matrix: 100% Remediation Verified' },
        { type: 'dim', text: '  Penetration testing executed with Burp Suite Pro, Frida & Kali Linux.' }
      )
    } else if (lower === 'contact') {
      newLogs.push(
        { type: 'success', text: 'DIRECT CHANNELS TO REXER STUDIO:' },
        { type: 'dim', text: '  • Email: rexerlk@gmail.com' },
        { type: 'dim', text: '  • YouTube: https://youtube.com/@RexerLK (60K+)' },
        { type: 'dim', text: '  • Twitter: https://twitter.com/RexerLK' },
        { type: 'dim', text: '  • GitHub: https://github.com/adithyaabhiman2006/new_web_rexer' }
      )
    } else {
      newLogs.push({
        type: 'danger',
        text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`,
      })
    }

    setLogs(newLogs)
    setInput('')
  }

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [logs])

  return (
    <div className="terminal-window" id="interactive-cyber-terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
        </div>
        <div className="terminal-title">rexer@imperial-node: ~ (bash)</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.65rem', color: 'var(--emerald-neon)' }}>
          <span className="telemetry-dot" /> LIVE
        </div>
      </div>

      {/* Terminal Mechanical Flap Status Sub-header */}
      <div
        style={{
          padding: '0.4rem 0.85rem',
          background: 'rgba(2, 6, 14, 0.95)',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          overflowX: 'auto',
        }}
      >
        <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
          NODE TELEMETRY:
        </span>
        <SplitFlapText
          words={[
            'SYSTEM DEFENSE ARMED',
            'ENCLAVE RUNNING 120FPS',
            '0 ACTIVE BREACHES DETECTED',
            'ECDSA SECP256K1 VERIFIED',
            'CLAUDE v4.6 CODERABBIT OK'
          ]}
          fontSize={11}
          gap={2}
          tileRadius={3}
          flipsPerChar={4}
          cycleDelay={3200}
          flipDuration={0.08}
          stagger={0.03}
          tileColor="#050c1a"
          textColor="#00f0ff"
          padTo={26}
        />
      </div>

      <div className="terminal-body" ref={bodyRef}>
        {logs.map((log, i) => (
          <div key={i} className="term-line">
            {log.type === 'prompt' ? (
              <div>
                <span className="term-prompt">rexer@defense:~$ </span>
                <span className="term-cmd">{log.cmd}</span>
              </div>
            ) : (
              <div className={`term-${log.type}`}>{log.text}</div>
            )}
          </div>
        ))}

        {/* Input line */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleCommand(input)
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}
        >
          <span className="term-prompt">rexer@defense:~$ </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: 'var(--text-pure)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              outline: 'none',
            }}
          />
        </form>
      </div>

      {/* Quick Interactive Command Chips */}
      <div style={{
        padding: '0.6rem 1rem',
        background: '#040914',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        flexWrap: 'wrap',
        overflowX: 'auto',
      }}>
        <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>QUICK CMD:</span>
        {QUICK_COMMANDS.map((qc) => (
          <button
            key={qc}
            onClick={() => handleCommand(qc)}
            style={{
              padding: '2px 8px',
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '4px',
              color: 'var(--cyan-bright)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--cyan-bright)')}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
          >
            {qc}
          </button>
        ))}
      </div>
    </div>
  )
}
