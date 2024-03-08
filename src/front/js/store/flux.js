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
            carrito: [] // Agregamos un array para almacenar los elementos del carrito
        },
        actions: {
            // Define tus acciones aquí
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({ message: data.message });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            changeColor: (index, color) => {
                // Implementación de changeColor
            },
            getCursos: async () => {
                // Implementación de getCursos
            },
            resetDemo: () => {
                const demo = getStore().demo;
                // Modificar demo si es necesario
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;
