import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Send, CornerDownLeft } from 'lucide-react';
import {
  personalProfile,
  skillsMatrix,
  projectsShowcase,
  achievementsMilestones,
  terminalCommandsHelp
} from '../data/portfolioData';

/**
 * Terminal.exe Application
 * Simulated interactive developer shell with command history (Up/Down arrow keys),
 * auto-scroll, command execution, and friendly formatting.
 */
export default function TerminalApp({ onOpenApp }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: "╔══════════════════════════════════════════════════════════════╗\n║  JHANAVI.EXE COMMAND TERMINAL [v2.5.0-student-builder]       ║\n║  AWS Student Builder Challenge • Core Architecture Shell      ║\n╚══════════════════════════════════════════════════════════════╝\nType 'help' or click any command chip below to explore."
    }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);

  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  const availableCommands = [
    'help', 'about', 'skills', 'projects', 'achievements',
    'superpower', 'github', 'contact', 'aws', 'whoami', 'date', 'clear'
  ];

  // Auto-scroll on new entries
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCmd) => {
    const trimmed = rawCmd.trim().toLowerCase();
    if (!trimmed) return;

    // Add to navigation history
    setCommandHistory((prev) => [trimmed, ...prev]);
    setHistoryPointer(-1);

    // Record user line
    const userLine = { type: 'user', text: rawCmd };
    let outputLine = null;

    switch (trimmed) {
      case 'help': {
        const helpLines = Object.entries(terminalCommandsHelp)
          .map(([cmd, desc]) => `  ${cmd.padEnd(14)} - ${desc}`)
          .join('\n');
        outputLine = {
          type: 'output',
          text: `AVAILABLE COMMANDS:\n${helpLines}\n\nTip: Press Tab to autocomplete commands. Use Up/Down arrows for history.`
        };
        break;
      }

      case 'about': {
        outputLine = {
          type: 'output',
          text: `NAME: ${personalProfile.name}\nEDUCATION: ${personalProfile.education.degree}\nINSTITUTION: ${personalProfile.education.institution}, ${personalProfile.education.location}\nROLE: ${personalProfile.role}\n\nBIO: ${personalProfile.shortBio}\n\nFOCUS:\n${personalProfile.interests.map(i => `  • ${i}`).join('\n')}`
        };
        break;
      }

      case 'skills': {
        const skillsOutput = skillsMatrix
          .map(cat => `[${cat.category}]\n  ` + cat.skills.map(s => `${s.name} (${s.status})`).join(', '))
          .join('\n\n');
        outputLine = {
          type: 'output',
          text: `TECHNICAL SKILLS & EXPLORATIONS:\n\n${skillsOutput}`
        };
        break;
      }

      case 'projects': {
        const projOutput = projectsShowcase
          .map((p, i) => `${i + 1}. ${p.title} [${p.badge}]\n   ${p.shortDescription}\n   Tags: ${p.tags.join(', ')}\n   Repo: ${p.githubUrl}`)
          .join('\n\n');
        outputLine = {
          type: 'output',
          text: `FEATURED REPOSITORIES:\n\n${projOutput}`
        };
        break;
      }

      case 'achievements': {
        const achOutput = achievementsMilestones
          .map(a => `• ${a.title} (${a.date})\n  ${a.organization}\n  Note: ${a.highlight}`)
          .join('\n\n');
        outputLine = {
          type: 'output',
          text: `KEY MILESTONES & JOURNEY:\n\n${achOutput}`
        };
        break;
      }

      case 'github': {
        outputLine = {
          type: 'output',
          text: `GITHUB PROFILE:\n${personalProfile.socialLinks.github.url}\nUsername: ${personalProfile.socialLinks.github.username}\n(Configure real profile in src/data/portfolioData.js)`
        };
        break;
      }

      case 'contact': {
        outputLine = {
          type: 'output',
          text: `CONTACT CHANNELS:\nEmail: ${personalProfile.socialLinks.email.address}\nGitHub: ${personalProfile.socialLinks.github.url}\nLinkedIn: ${personalProfile.socialLinks.linkedin.url}\nLocation: ${personalProfile.education.location}`
        };
        break;
      }

      case 'superpower': {
        outputLine = {
          type: 'output',
          text: `Launching biometric scanner... [Redirecting to Superpower.exe]`
        };
        if (onOpenApp) {
          setTimeout(() => onOpenApp('superpower'), 400);
        }
        break;
      }

      case 'aws': {
        outputLine = {
          type: 'output',
          text: `AWS STUDENT BUILDER CHALLENGE:\nTheme: ${personalProfile.awsChallenge.theme}\nHosting: AWS Amplify (Static SPA Deployment)\nTarget Region: ${personalProfile.awsChallenge.region}\nStack: React 18, Vite 6, Modern CSS, Lucide Icons`
        };
        break;
      }

      case 'whoami': {
        outputLine = {
          type: 'output',
          text: `guest@jhanavi-universe (Terminal session granted with read/interact permissions)`
        };
        break;
      }

      case 'date': {
        outputLine = {
          type: 'output',
          text: `SYSTEM CLOCK: ${new Date().toLocaleString()}`
        };
        break;
      }

      case 'clear': {
        setHistory([]);
        return;
      }

      case 'ls':
      case 'dir': {
        outputLine = {
          type: 'output',
          text: `DIRECTORY CONTENTS: /home/jhanavi/universe\n  About.exe        Skills.exe         Projects.exe\n  Achievements.exe Superpower.exe     Terminal.exe\n  Contact.exe      README.md          amplify.yml`
        };
        break;
      }

      case 'pwd': {
        outputLine = {
          type: 'output',
          text: `/home/jhanavi/developer-universe`
        };
        break;
      }

      case 'uname': {
        outputLine = {
          type: 'output',
          text: `JHANAVI.EXE Linux-Kernel-Subsystem 2.5.0-student-builder x86_64 Cloud/AWS`
        };
        break;
      }

      case 'matrix': {
        outputLine = {
          type: 'output',
          text: `01001010 01001000 01000001 01001110 01000001 01010110 01001001\nWake up, developer... The AWS Universe has you.\n"Curious mind. Constantly building. Always evolving."`
        };
        break;
      }

      case 'sudo': {
        outputLine = {
          type: 'error',
          text: `Permission denied: Guest user is not in the sudoers file. This incident will be logged in JHANAVI.EXE audit records.`
        };
        break;
      }

      default: {
        outputLine = {
          type: 'error',
          text: `Command not recognized: '${trimmed}'. Type 'help' to see list of valid commands.`
        };
        break;
      }
    }

    setHistory((prev) => [...prev, userLine, outputLine]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyPointer + 1;
      if (nextIdx < commandHistory.length) {
        setHistoryPointer(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const prevIdx = historyPointer - 1;
      if (prevIdx >= 0) {
        setHistoryPointer(prevIdx);
        setInputVal(commandHistory[prevIdx]);
      } else {
        setHistoryPointer(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;
      const match = availableCommands.find((c) => c.startsWith(current));
      if (match) {
        setInputVal(match);
      }
    }
  };

  const handleChipClick = (cmd) => {
    executeCommand(cmd);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="terminal-window-body">
      <div className="terminal-scroll-area" ref={scrollRef}>
        {history.map((item, index) => {
          if (item.type === 'user') {
            return (
              <div key={index} className="terminal-prompt-line">
                <span className="terminal-user">jhanavi</span>
                <span className="terminal-symbol">@</span>
                <span className="terminal-path">universe:~$</span>
                <span className="terminal-input-command">{item.text}</span>
              </div>
            );
          }
          return (
            <div
              key={index}
              className={`terminal-output-content ${item.type === 'error' ? 'error' : ''}`}
            >
              {item.text}
            </div>
          );
        })}
      </div>

      {/* Interactive Quick Command Suggestion Bar */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          padding: '8px 14px',
          background: 'rgba(8, 12, 20, 0.95)',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)'
        }}
        aria-label="Quick Terminal Commands"
      >
        <span style={{ fontSize: '0.72rem', color: '#64748b', alignSelf: 'center', fontFamily: 'var(--font-mono)' }}>
          Quick:
        </span>
        {['help', 'about', 'skills', 'projects', 'superpower', 'contact', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleChipClick(cmd)}
            style={{
              padding: '2px 8px',
              fontSize: '0.74rem',
              fontFamily: 'var(--font-mono)',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.25)',
              color: '#c4b5fd',
              borderRadius: '4px',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {cmd}
          </button>
        ))}
      </div>

      <form className="terminal-input-form" onSubmit={handleSubmit}>
        <div className="terminal-prompt-line" style={{ flexShrink: 0 }}>
          <span className="terminal-user">jhanavi</span>
          <span className="terminal-symbol">@</span>
          <span className="terminal-path">universe:~$</span>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="terminal-text-input"
          placeholder="Type 'help', 'about', 'projects', 'superpower'..."
          aria-label="Terminal command input"
          autoFocus
        />
        <button
          type="submit"
          style={{ background: 'transparent', border: 'none', color: '#8b5cf6', cursor: 'pointer', padding: '4px' }}
          aria-label="Execute command"
        >
          <CornerDownLeft size={16} />
        </button>
      </form>
    </div>
  );
}

