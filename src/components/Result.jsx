import { useContext, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
	height: 41vh;
`;

const Result = () => {
	const [src, setSrc] = useState("");
	const { html, css, js } = useContext(DataContext);

	useEffect(() => {
		const srcCode = `
        <html>
            <head>
                <style>${css || ""}</style>
            </head>
            <body>
                ${html || ""}
                <script>${js || ""}</script>
            </body>
        </html>
        `;

		const timeout = setTimeout(() => {
			setSrc(srcCode);
		}, 1000);

		return () => clearTimeout(timeout);
	}, [html, css, js]);

	return (
		<Container>
			<iframe
				srcDoc={src}
				title="Output"
				sandbox="allow-scripts allow-same-origin"
				frameBorder={0}
				width="100%"
				height="100%"
			/>
		</Container>
	);
};

export default Result;
