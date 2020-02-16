// контейнер компрнента передает action в редьюсер
export const catchPok = (id) => ({
	type: 'CATCH',
	id: id
});
export const saveCurrentPok = (id) => ({
	type: 'SAVE_CURRENT',
	id: id
});
