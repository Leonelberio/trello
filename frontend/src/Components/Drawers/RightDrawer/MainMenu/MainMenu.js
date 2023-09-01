import React from 'react';
import { Container, ButtonContainer } from './styled';
import MenuButton from './MenuButton';
import { Hr } from '../../styled';
import BoardIcon from '@mui/icons-material/Dashboard';
import BackgroundIcon from '@mui/icons-material/Wallpaper';
import ActivitySection from './ActivitySection/ActivitySection';
const MainMenu = (props) => {
	return (
		<Container>
			<ButtonContainer>
				<MenuButton
					icon={<BoardIcon fontSize='small' color='inherit'/>}
					title='À propos de ce tableau'
					description='Ajouter une description à votre tableau'
					clickCallback={()=>props.menuCallback('À propos de ce tableau')}
				/>
				<MenuButton
					icon={<BackgroundIcon fontSize='small' color='inherit'/>}
					title='Changer le background'
					description='Changer le background de votre Tableau'
					clickCallback={()=>props.menuCallback('Changer le background')}
				/>
			</ButtonContainer>
			<Hr />
			<ActivitySection />
		</Container>
	);
};

export default MainMenu;
