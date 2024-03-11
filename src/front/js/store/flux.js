const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			cursos: [],
			carrito: [],
			cursosError: null,
			token: null,
			user: null,
			modulo: [],
			moduloError: null,
			
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			agregarAlCarrito: (curso) => {
                const store = getStore();
                const updatedCart = [...store.carrito, curso];
                setStore({ carrito: updatedCart });
            },

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCursos: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/curso");
					const data = await resp.json();
					setStore({ cursos: data, cursosError: null });
					return data;
				} catch (error) {
					console.log("Error loading cursos from backend", error);
					setStore({ cursos: [], cursosError: "Error al cargar cursos" });
				}
			},
			signup: (email, password, userName, firstName, lastName, telephone, navigate ) => {
				fetch(process.env.BACKEND_URL + '/api/signup', {
					method: 'POST',
					body: JSON.stringify({ email, password, userName, firstName, lastName, telephone }),
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(response => response.json())
					.then(data => {
						if (data.error) alert(data.error)
						else navigate('/login')
					})
					.catch(error => {
						alert(error)
					})
			},
			login: (email, password, navigate) => {
				fetch(process.env.BACKEND_URL + '/api/login', {
					method: 'POST',
					body: JSON.stringify({ email, password }),
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(response => response.json())
					.then(data => {
						if (data.error) alert(data.error)
						else {
							localStorage.setItem('token', data.token)
							setStore({ token: data.token })
							getActions().verifyIdentity()
							navigate('/miperfil')
						}
					})
					.catch(error => {
						alert(error)
					})
			},
			logout: () => {
				setStore({ token: null, user: null })
				localStorage.removeItem('token')
			},
			verifyIdentity: () => {
				let token = localStorage.getItem('token');
				if (token) {
					fetch(process.env.BACKEND_URL + '/api/verify_identity', {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + token
						}
					})
						.then(response => response.json())
						.then(data => {
							if (data && data.user) {
								setStore({ user: data.user, token: data.token });
							}
						});
				}
			},
			changePassword: (email, newPassword) => {
				fetch(process.env.BACKEND_URL + '/api/change_password', {
					method: 'POST',
					body: JSON.stringify({ email, newPassword }),
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + localStorage.getItem('token')
					}
				})
					.then(response => response.json())
					.then(data => {
						if (data.error) {
							alert(data.error);
						} else {
							alert('Contraseña cambiada con éxito');
						}
					})
					.catch(error => {
						alert(error);
					});
			},
			updateProfile: (userName, firstName, lastName, telephone) => {
				const token = localStorage.getItem('token');
				fetch(process.env.BACKEND_URL + '/api/update_profile', {
					method: 'PUT',
					body: JSON.stringify({ userName, firstName, lastName, telephone }),
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + token
					}
				})
				.then(response => response.json())
				.then(data => {
					if (data.error) {
						alert(data.error);
					} else {
						
						setStore({ user: data.user });
						alert('Perfil actualizado con éxito');
					}
				})
				.catch(error => {
					alert(error);
				});
			},
			getModulos: async () => {
				try {
				   const resp = await fetch(process.env.BACKEND_URL + "/api/modulo");
				   const data = await resp.json();
				   console.log("Modulos:", data);
				   setStore({ modulo: data, moduloError: null });
				   return data;
				} catch (error) {
				   console.log("Error loading modulos from backend", error);
				   setStore({ modulo: [], moduloError: "Error al cargar modulos" });
				}
			},
			enviarContacto: async (formData) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/contact", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(formData)
					});
					const data = await resp.json();
					console.log(data);
				} catch (error) {
					console.log("Error sending contact form data", error);
				}
			}
		}
	};
};

export default getState;			
