
sync:
	git pull && git push

tags:
	find docs -name '*.html' -print0 | xargs -0 etags
