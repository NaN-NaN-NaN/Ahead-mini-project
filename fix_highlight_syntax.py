
import re

file_path = 'src/components/sections/Highlight.tsx'

def style_replacer(match):
    style_str = match.group(1)
    declarations = [d.strip() for d in style_str.split(';') if d.strip()]
    obj_pairs = []
    for decl in declarations:
        if ':' in decl:
            prop, val = decl.split(':', 1)
            prop = prop.strip()
            val = val.strip()
            if '-' in prop:
                parts = prop.split('-')
                prop = parts[0] + ''.join(p.title() for p in parts[1:])
            
            obj_pairs.append(f"{prop}: '{val}'")
    
    return f"style={{{{ {', '.join(obj_pairs)} }}}}"

with open(file_path, 'r') as f:
    lines = f.readlines()

new_lines = []
for i, line in enumerate(lines):
    # Process from line 5 onwards (JSX content)
    if i >= 4:
        line = line.replace('class=', 'className=')
        line = re.sub(r'style="([^"]*)"', style_replacer, line)
        line = line.replace('colspan=', 'colSpan=')
        line = line.replace('rowspan=', 'rowSpan=')
        line = line.replace('stroke-width=', 'strokeWidth=')
        line = line.replace('stroke-linecap=', 'strokeLinecap=')
        line = line.replace('stroke-linejoin=', 'strokeLinejoin=')
        line = line.replace('fill-rule=', 'fillRule=')
        line = line.replace('clip-rule=', 'clipRule=')
        line = line.replace('tabindex=', 'tabIndex=')
        line = line.replace('fill-opacity=', 'fillOpacity=')
        line = line.replace('stroke-opacity=', 'strokeOpacity=')
        
    new_lines.append(line)

with open(file_path, 'w') as f:
    f.writelines(new_lines)

print("Fixed Highlight.tsx syntax")
