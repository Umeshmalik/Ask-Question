import { Card, CardHeader, Container } from 'reactstrap';

import CardBody from './components/CardBody';

const styles = {
  container: {
    backgroundColor: '#F5F5F5',
    height: '100vh',
    display: 'flex',
    placeContent: 'center'
  },
  header: {
    display: 'flex',
    placeContent: 'center',
    backgroundColor: '#CBC3E3',
    borderRadius: '10px',
    top: '10px',
    width: 'calc(100vw - 100px)',
    margin: 'auto',
    marginTop: '10px',
    padding: '0.5px 15px 0.5px 15px',
  },
  body: {
    backgroundColor: '#CBC3E3',
    borderRadius: '10px',
    marginTop: '10px',
    padding: '0.5px 15px 0.5px 15px',
    height: 'calc(100vh - 150px)',
    width: 'calc(100vw - 100px)'
  },
}

const App = () => {
  return (
    <Container style={styles.container}>
      <Card>
        <CardHeader style={styles.header}>
          <h1>Ask Question</h1>
        </CardHeader>
        <Container style={styles.body}>
          <CardBody />
        </Container>
      </Card>
    </Container>
  );
}

export default App;
