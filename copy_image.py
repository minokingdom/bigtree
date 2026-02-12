import shutil
import os

src = r"C:\Users\미노스\.gemini\antigravity\brain\170b58ab-d219-44a0-a369-e11c0170b40d\media__1770887640306.png"
dst = r"d:\bigtree\kiosk-web\public\img\kiosk-low.png"

try:
    shutil.copy2(src, dst)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
