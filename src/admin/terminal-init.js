/**
 * Terminal CMS Initializer
 * Creates a terminal-like experience in the CMS
 */

(function () {
    // Wait for the CMS to fully load
    window.addEventListener('load', function () {
        setTimeout(initTerminal, 1500);
    });

    function initTerminal() {
        const header = document.querySelector('header');
        if (!header) return;

        // Create the terminal prompt container
        const terminalPrompt = document.createElement('div');
        terminalPrompt.className = 'terminal-prompt';
        terminalPrompt.innerHTML = `
      <span class="terminal-user">wessley@portfolio</span>:<span class="terminal-path">~/cms</span>$ 
      <span class="terminal-command">init cms --theme=terminal</span>
      <span class="terminal-cursor"></span>
    `;

        // Insert the prompt before the header content
        if (header.firstChild) {
            header.insertBefore(terminalPrompt, header.firstChild);
        } else {
            header.appendChild(terminalPrompt);
        }

        // Simulate terminal typing
        simulateTyping();

        // Add terminal commands to footer
        addTerminalFooter();

        // Add terminal keyboard shortcuts
        addKeyboardShortcuts();
    }

    function simulateTyping() {
        const commands = [
            'loading templates...',
            'initializing markdown parser...',
            'connecting to git repository...',
            'decap cms v3.1.0 loaded successfully!'
        ];

        // Create a div for commands output
        const outputDiv = document.createElement('div');
        outputDiv.className = 'terminal-output';
        document.body.appendChild(outputDiv);

        // Display each command with typing effect
        commands.forEach((cmd, index) => {
            setTimeout(() => {
                const cmdLine = document.createElement('div');
                cmdLine.className = 'terminal-line';
                outputDiv.appendChild(cmdLine);

                // Type each character
                let i = 0;
                const typing = setInterval(() => {
                    if (i < cmd.length) {
                        cmdLine.textContent += cmd.charAt(i);
                        i++;
                    } else {
                        clearInterval(typing);

                        // Add success marker when done
                        if (index === commands.length - 1) {
                            const successDiv = document.createElement('div');
                            successDiv.className = 'terminal-success';
                            successDiv.textContent = '✓ Ready';
                            outputDiv.appendChild(successDiv);

                            // Remove the output after showing
                            setTimeout(() => {
                                outputDiv.classList.add('fade-out');
                                setTimeout(() => {
                                    outputDiv.remove();
                                }, 1000);
                            }, 1500);
                        }
                    }
                }, 25);
            }, index * 800);
        });
    }

    function addTerminalFooter() {
        const footer = document.createElement('footer');
        footer.className = 'terminal-footer';

        footer.innerHTML = `
      <div class="terminal-stats">
        <span>memory: <span class="stat-value">64MB</span></span> | 
        <span>cpu: <span class="stat-value">2%</span></span> | 
        <span>uptime: <span class="stat-value" id="uptime">00:00:00</span></span>
      </div>
      <div class="terminal-help">
        Press <kbd>CTRL</kbd>+<kbd>H</kbd> for help | <kbd>CTRL</kbd>+<kbd>S</kbd> to save
      </div>
    `;

        document.body.appendChild(footer);

        // Update uptime counter
        let seconds = 0;
        setInterval(() => {
            seconds++;
            const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
            const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
            const secs = (seconds % 60).toString().padStart(2, '0');
            document.getElementById('uptime').textContent = `${hrs}:${mins}:${secs}`;
        }, 1000);
    }

    function addKeyboardShortcuts() {
        document.addEventListener('keydown', function (e) {
            // CTRL + H for help
            if (e.ctrlKey && e.key === 'h') {
                e.preventDefault();
                showHelp();
            }
        });
    }

    function showHelp() {
        const helpModal = document.createElement('div');
        helpModal.className = 'terminal-help-modal';
        helpModal.innerHTML = `
      <div class="terminal-help-content">
        <h3>Terminal CMS Help</h3>
        <div class="terminal-help-section">
          <h4>$ Available Commands</h4>
          <table>
            <tr><td><kbd>CTRL</kbd>+<kbd>H</kbd></td><td>Show this help</td></tr>
            <tr><td><kbd>CTRL</kbd>+<kbd>S</kbd></td><td>Save current changes</td></tr>
            <tr><td><kbd>ESC</kbd></td><td>Close modal/cancel</td></tr>
            <tr><td><kbd>CTRL</kbd>+<kbd>ENTER</kbd></td><td>Publish</td></tr>
          </table>
        </div>
        <p class="terminal-help-footer">Press <kbd>ESC</kbd> to close</p>
      </div>
    `;

        document.body.appendChild(helpModal);

        // Close on ESC
        const closeHandler = function (e) {
            if (e.key === 'Escape') {
                helpModal.classList.add('fade-out');
                setTimeout(() => helpModal.remove(), 500);
                document.removeEventListener('keydown', closeHandler);
            }
        };

        document.addEventListener('keydown', closeHandler);

        // Close on click outside
        helpModal.addEventListener('click', function (e) {
            if (e.target === helpModal) {
                helpModal.classList.add('fade-out');
                setTimeout(() => helpModal.remove(), 500);
                document.removeEventListener('keydown', closeHandler);
            }
        });
    }
})();