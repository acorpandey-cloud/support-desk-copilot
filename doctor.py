# Run with: python3 doctor.py
# Proves the python3 you are actually running is 3.11 or newer.
import sys

major, minor = sys.version_info[:2]
if (major, minor) >= (3, 11):
    print("OK   Python 3.11 or newer")
else:
    print(f"FAIL Python {major}.{minor} is too old: see the uv steps in this lesson")
