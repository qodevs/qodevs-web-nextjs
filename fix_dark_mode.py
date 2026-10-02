import re

with open("src/app/globals.css", "r") as f:
    css = f.read()

dark_additions = """
  --surface: #050505;
  --surface-container-lowest: #0a0a0a;
  --surface-container-low: #111111;
  --surface-container: #1a1a1a;
  --surface-container-high: #222222;
  --surface-container-highest: #2a2a2a;
  --on-surface: #ffffff;
  --on-surface-variant: #a1a1aa;
  --secondary: #a1a1aa;
  --on-primary-container: #ffffff;
  --primary-fixed: #1e3a29;
  --on-primary-fixed: #ffffff;
  --outline-variant: rgba(255,255,255,0.1);
  --error: #ff897d;
  --error-container: #93000a;
"""

# We need to add these variables to .dark {}
new_css = re.sub(r'(\.dark\s*\{[^}]*)(\})', r'\1' + dark_additions + r'\2', css)

# We also need to map these to the @theme inline if they are hardcoded.
# Currently they are hardcoded like --color-surface: #f8f9ff;
# Let's change them to use variables so they can be overridden by .dark
# We will do a simple find and replace for the ones we added.

mappings = {
    "--color-surface: #f8f9ff;": "--color-surface: var(--surface, #f8f9ff);",
    "--color-surface-container-lowest: #ffffff;": "--color-surface-container-lowest: var(--surface-container-lowest, #ffffff);",
    "--color-surface-container-low: #eff4ff;": "--color-surface-container-low: var(--surface-container-low, #eff4ff);",
    "--color-surface-container: #e5eeff;": "--color-surface-container: var(--surface-container, #e5eeff);",
    "--color-surface-container-high: #dce9ff;": "--color-surface-container-high: var(--surface-container-high, #dce9ff);",
    "--color-surface-container-highest: #d3e4fe;": "--color-surface-container-highest: var(--surface-container-highest, #d3e4fe);",
    "--color-on-surface: #0b1c30;": "--color-on-surface: var(--on-surface, #0b1c30);",
    "--color-on-surface-variant: #3e4a40;": "--color-on-surface-variant: var(--on-surface-variant, #3e4a40);",
    "--color-secondary: #565e74;": "--color-secondary: var(--secondary, #565e74);",
    "--color-on-primary-container: #004625;": "--color-on-primary-container: var(--on-primary-container, #004625);",
    "--color-primary-fixed: #88f9b0;": "--color-primary-fixed: var(--primary-fixed, #88f9b0);",
    "--color-on-primary-fixed: #00210f;": "--color-on-primary-fixed: var(--on-primary-fixed, #00210f);",
    "--color-outline-variant: #bdcabd;": "--color-outline-variant: var(--outline-variant, #bdcabd);",
    "--color-error: #ba1a1a;": "--color-error: var(--error, #ba1a1a);",
    "--color-error-container: #ffdad6;": "--color-error-container: var(--error-container, #ffdad6);"
}

for k, v in mappings.items():
    new_css = new_css.replace(k, v)

with open("src/app/globals.css", "w") as f:
    f.write(new_css)
