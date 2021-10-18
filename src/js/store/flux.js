const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			loadContacts()
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
