
import re

file_path = 'src/components/sections/BrainAndNervous.tsx'

def style_replacer(match):
    style_str = match.group(1)
    # Parse the style string "prop: val; prop2: val2;"
    declarations = [d.strip() for d in style_str.split(';') if d.strip()]
    obj_pairs = []
    for decl in declarations:
        if ':' in decl:
            prop, val = decl.split(':', 1)
            prop = prop.strip()
            val = val.strip()
            # simple camelCase conversion for common props if needed, but mostly look ok
            # inset, width, height, top, left, right, bottom, transform, opacity
            # no dashes usually in these basic ones. 
            # if there is a dash, convert to camelCase
            if '-' in prop:
                parts = prop.split('-')
                prop = parts[0] + ''.join(p.title() for p in parts[1:])
            
            obj_pairs.append(f"{prop}: '{val}'")
    
    return f"style={{{{ {', '.join(obj_pairs)} }}}}"

with open(file_path, 'r') as f:
    lines = f.readlines()

new_lines = []
for i, line in enumerate(lines):
    # Process only from line 394 (index 393) onwards
    if i >= 393:
        # replace class= with className=
        line = line.replace('class=', 'className=')
        
        # replace style="String" with style={{ Object }}
        # Simple regex for style="..."
        # Assumes style="..." is on one line or handled by regex finding quote pairs
        line = re.sub(r'style="([^"]*)"', style_replacer, line)
        
        # fix colspan -> colSpan if any
        line = line.replace('colspan=', 'colSpan=')
        line = line.replace('rowspan=', 'rowSpan=')
        
        # stroke-width -> strokeWidth (for SVG)
        line = line.replace('stroke-width=', 'strokeWidth=')
        line = line.replace('stroke-linecap=', 'strokeLinecap=')
        line = line.replace('stroke-linejoin=', 'strokeLinejoin=')
        # fill-rule -> fillRule
        line = line.replace('fill-rule=', 'fillRule=')
        # clip-rule -> clipRule
        line = line.replace('clip-rule=', 'clipRule=')
        
    new_lines.append(line)

with open(file_path, 'w') as f:
    f.writelines(new_lines)

print("Fixed BrainAndNervous.tsx syntax")
