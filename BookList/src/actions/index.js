export function selectBook(book) {
	//Action creator, it needs to return an action,
	//an object with a type property
	return{
			type: 'BOOK_SELECTED',
			payload: book
		};
}