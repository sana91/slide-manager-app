.PHONY: help generate-slides

help:
	@echo "Available commands:"
	@echo "  make generate-slides SLIDE_CODE=<code>"
	@echo "  Example: make generate-slides SLIDE_CODE=MY_SLIDE"
	@echo ""
	@echo "Or use npm:"
	@echo "  npm run generate:slides <slide_code>"
	@echo "  Example: npm run generate:slides MY_SLIDE"
	@echo ""
	@echo "Note: TSV file (scripts/src/<slide_code>.tsv) is required"

generate-slides:
ifndef SLIDE_CODE
	@echo "Error: SLIDE_CODE is required"
	@echo "Usage: make generate-slides SLIDE_CODE=<code>"
	@exit 1
endif
	@node scripts/generate-slides.cjs $(SLIDE_CODE)
