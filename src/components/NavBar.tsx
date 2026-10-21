import { ActionBar, PageLayout } from '@primer/react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

  return (
    <PageLayout.Header className="home-header">
      <ActionBar aria-label="Toolbar">
        <ActionBar.Button onClick={() => navigate('/')}>Home</ActionBar.Button>
        <ActionBar.Button onClick={() => navigate('/projects')}>Projects</ActionBar.Button>
        <ActionBar.Button onClick={() => navigate('/resume')}>Resume</ActionBar.Button>
      </ActionBar>
    </PageLayout.Header>
  )
}

export default NavBar;