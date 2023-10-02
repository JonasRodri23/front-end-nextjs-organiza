import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import FormularioTransacoes from "../components/FormularioTransacoes/FormularioTransacoes";
import ListaTransacoes from "../components/ListaTransacoes/ListaTransacoes";
import styles from "../styles/Transacoes.module.css";
import Head from "next/head";
import Link from "next/link";
=======
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FormularioTransacoes from "../components/formularioTransacoes/FormularioTransacoes";
import ListaTransacoes from "../components/listaTransacoes/ListaTransacoes";
import styles from "../styles/Transacoes.module.css";
import Head from "next/head";
import { mainListItems, secondaryListItems } from '@/components/dashboard/listItems';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import MuiDrawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';





const defaultTheme = createTheme();

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);
>>>>>>> 4ff84929be3f493fc49c069214a70fd7ef853c6f

const Transacoes = () => {
  const [transacoes, setTransacoes] = useState([]);
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    const storedTransacoes =
      JSON.parse(localStorage.getItem("transacoes")) || [];
    setTransacoes(storedTransacoes);
  }, []);

  const handleAddTransacao = (transacao) => {
    const updatedTransacoes = [...transacoes, transacao];
    setTransacoes(updatedTransacoes);
    localStorage.setItem("transacoes", JSON.stringify(updatedTransacoes));
  };

  const handleExcluirTransacao = (index) => {
    const updatedTransacoes = transacoes.filter((_, i) => i !== index);
    setTransacoes(updatedTransacoes);
    localStorage.setItem("transacoes", JSON.stringify(updatedTransacoes));
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
<<<<<<< HEAD
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Link href="/dashboard">
        <button className={styles.backButton}>Voltar ao Dashboard</button>
      </Link>
      <div className={styles.content}>
        <FormularioTransacoes onAddTransacao={handleAddTransacao} />
        <ListaTransacoes
          transacoes={transacoes}
          onExcluirTransacao={handleExcluirTransacao}
        />
      </div>
    </div>
=======

    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Transações
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <div className={styled.container} >
              <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              </Head>
              <div className={styles.content}>
                <FormularioTransacoes onAddTransacao={handleAddTransacao} />
                <ListaTransacoes
                  transacoes={transacoes}
                  onExcluirTransacao={handleExcluirTransacao}
                />
              </div>
            </div>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>

>>>>>>> 4ff84929be3f493fc49c069214a70fd7ef853c6f
  );
};

export default Transacoes;
