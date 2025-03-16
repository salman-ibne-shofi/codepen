import { useContext } from "react";
import { Box, styled } from "@mui/material";
import Editor from "./Editor";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
	display: flex;
	background-color: #060606;
	height: 55vh;
`;

const Code = () => {
	const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

	return (
		<Container>
			<Editor
				language="HTML"
				icon="/"
				color="#FF3C41"
				value={html}
				onChange={setHtml}
			/>
			<Editor
				language="CSS"
				icon="🎨"
				color="#0EBEFF"
				value={css}
				onChange={setCss}
			/>
			<Editor
				language="JavaScript"
				icon="JS"
				color="#FCD000"
				value={js}
				onChange={setJs}
			/>
		</Container>
	);
};

export default Code;
