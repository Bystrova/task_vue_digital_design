const autoHeight = {
	componentUpdated(el) {
		let defaultHeight = 0;
		const minHeight = 90;
		const padding = 10;
		const maxHeight = 510;
		el.style.height = 'auto';
		el.style.maxHeight = `${maxHeight}px`;
		
		if (el.scrollHeight < minHeight) {
			defaultHeight = minHeight;
		} else if (el.scrollHeight > minHeight && el.scrollHeight < maxHeight){
			defaultHeight = el.scrollHeight;
		} else {
			defaultHeight = maxHeight;
		}

		el.style.height = `${defaultHeight}px`;

		el.addEventListener('input', ()=>{
			el.style.height = `${defaultHeight}px`;
			if(el.scrollHeight > defaultHeight && el.scrollHeight < maxHeight) {
				el.style.height = `${el.scrollHeight + padding}px`;
			} else if (el.scrollHeight > maxHeight){
				el.style.height = `${maxHeight}px`;
			}
		})
	},
}

export default _.cloneDeep(autoHeight);