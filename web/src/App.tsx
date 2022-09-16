// Componentes / Propriedades

function App() {
	return (
		<>
			<Button title="Copiar" />
			<Button title="Colar"/>
			<Button title="Recortar"/>
		</>
	)
}

interface ButtonProps {
	title: string;
}

function Button(props: ButtonProps) {
	return (
		<button>
			{props.title}
		</button>
	);
}

export default App
