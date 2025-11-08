#!/bin/bash

# スライド生成スクリプト

if [ $# -lt 2 ]; then
    echo "❌ Usage: ./generate-slides.sh <slide_code> <page_count>"
    echo "   Example: ./generate-slides.sh MY_SLIDE 5"
    exit 1
fi

SLIDE_CODE=$1
PAGE_COUNT=$2

# Node.jsスクリプトを実行
node scripts/generate-slides.cjs "$SLIDE_CODE" "$PAGE_COUNT"
