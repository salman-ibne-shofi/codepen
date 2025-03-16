import { useState } from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { xml } from "@codemirror/lang-xml";
import { css } from "@codemirror/lang-css";
import { material } from "@uiw/codemirror-theme-material";
import "../App.css";

const Container = styled(Box)`
	flex-grow: 1;
	flex-basic: 0;
	display: flex;
	flex-direction: column;
	padding: 0 8px 8px;
	overflow: auto;
	max-height: 50vh;
`;

const Heading = styled(Box)`
	background: #1d1e22;
	display: flex;
	padding: 9px 12px;
`;

const Header = styled(Box)`
	display: flex;
	background: #060606;
	color: #aaaebc;
	justify-content: space-between;
	font-weight: 700;
	align-items: center;
	padding: 5px;
`;

const Editor = ({ language, icon, color, value, onChange }) => {
	const [open, setOpen] = useState(true);

	const handleChange = (value) => {
		console.log(`Update ${language}:`, value);
		onChange(value);
	};

	return (
		<Container style={open ? null : { flexGrow: 0 }}>
			<Header>
				<Heading>
					<Box
						component="span"
						style={{
							background: color,
							height: 20,
							width: 20,
							display: "flex",
							placeContent: "center",
							borderRadius: 5,
							marginRight: 5,
							paddingBottom: 2,
							color: "#000",
						}}
					>
						{icon}
					</Box>
					{language}
				</Heading>
				<CloseFullscreenIcon
					fontSize="small"
					style={{ alignSelf: "center" }}
					onClick={() => setOpen((prevState) => !prevState)}
				/>
			</Header>
			<div style={{ flexGrow: 1, overflow: "auto" }}>
				<CodeMirror
					value={value}
					extensions={
						language === "HTML"
							? [xml()]
							: language === "javascript"
							? [javascript()]
							: [css()]
					}
					theme={material}
					onChange={handleChange}
				/>
			</div>
		</Container>
	);
};

export default Editor;
