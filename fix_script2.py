import re

with open("src/app/layout.tsx", "r") as f:
    content = f.read()

script_content = """              try {
                if (localStorage.theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}"""

content = re.sub(r'try \{.*?catch \(\_\) \{\}', script_content, content, flags=re.DOTALL)

with open("src/app/layout.tsx", "w") as f:
    f.write(content)
