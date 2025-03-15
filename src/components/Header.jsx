import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
	background: #060606;
	height: 9vh;
`;

const Header = () => {
	const logo = "https://i.ibb.co.com/Ndt5nFqf/codepen-icon-26.png";

	return (
		<Container position="static">
			<Toolbar>
				<img src={logo} alt="logo" style={{ width: 40 }} />
			</Toolbar>
		</Container>
	);
};

export default Header;
