#!/bin/bash

# スライド生成スクリプト

if [ $# -lt 1 ]; then
    echo "❌ Usage: ./generate-slides.sh <slide_code>"
    echo "   Example: ./generate-slides.sh MY_SLIDE"
    exit 1
fi

SLIDE_CODE=$1

# Node.jsスクリプトを実行
node scripts/generate-slides.cjs "$SLIDE_CODE"
