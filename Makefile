.PHONY: help generate-slides

help:
	@echo "Available commands:"
	@echo "  make generate-slides SLIDE_CODE=<code> PAGES=<count>"
	@echo "  Example: make generate-slides SLIDE_CODE=MY_SLIDE PAGES=5"
	@echo ""
	@echo "Or use npm:"
	@echo "  npm run generate:slides <slide_code> <page_count>"
	@echo "  Example: npm run generate:slides MY_SLIDE 5"

generate-slides:
ifndef SLIDE_CODE
	@echo "Error: SLIDE_CODE is required"
	@echo "Usage: make generate-slides SLIDE_CODE=<code> PAGES=<count>"
	@exit 1
endif
ifndef PAGES
	@echo "Error: PAGES is required"
	@echo "Usage: make generate-slides SLIDE_CODE=<code> PAGES=<count>"
	@exit 1
endif
	@node scripts/generate-slides.cjs $(SLIDE_CODE) $(PAGES)
