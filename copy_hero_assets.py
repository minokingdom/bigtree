import shutil
import os

base_path = r"C:\Users\미노스\.gemini\antigravity\brain\170b58ab-d219-44a0-a369-e11c0170b40d"
dest_path = r"d:\bigtree\kiosk-web\public\img"

mappings = {
    "media__1770888752868.png": "hero-keypad.png",
    "media__1770888733767.png": "hero-badge.png",
}

for src, dst in mappings.items():
    src_full = os.path.join(base_path, src)
    dst_full = os.path.join(dest_path, dst)
    try:
        shutil.copy2(src_full, dst_full)
        print(f"Copied {src} to {dst}")
    except Exception as e:
        print(f"Error copying {src}: {e}")
