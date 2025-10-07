import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion, rgba } from 'framer-motion';

const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Projetos', href: '#projetos' },
        { label: 'Formação', href: '#formacao' },
        { label: 'Habilidades', href: '#habilidades' },
        { label: 'Contato', href: '#contato' },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileOpen(false);
        }
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    background: '#060606',
                    height: '110px',
                }}
            >
                <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Toolbar sx={{ justifyContent: 'space-between', width: '100%', minHeight: '110px !important' }}>
                        <Typography
                            variant="h6"
                            component={motion.div}
                            whileHover={{ scale: 1.05 }}
                            sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 700,
                                fontSize: '34px',
                                background: 'linear-gradient(90deg, #5c8cb4 0%, #5c8cb4 100%)',
                                transition: 'background 0.3s',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                cursor: 'pointer',
                                '&:hover': {
                                    animation: 'gradientShift 3s infinite',
                                    '@keyframes gradientShift': {
                                        '0%': {
                                            backgroundPosition: '0% 50%',
                                        },
                                        '50%': {
                                            backgroundPosition: '100% 50%',
                                        },
                                        '100%': {
                                            backgroundPosition: '0% 50%',
                                        },
                                    },
                                },
                            }}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Lucas Simão
                        </Typography>

                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    sx={{
                                        color: '#BEBEBE',
                                        textTransform: 'none',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        fontFamily: 'Plus Jakarta Sans, Roboto',
                                        px: 0,
                                        minWidth: 'auto',
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            color: '#5c8cb4',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                            
                            <Button
                                variant="outlined"
                                onClick={() => scrollToSection('#contato')}
                                sx={{
                                    border: '1px solid #5c8cb4',
                                    borderRadius: '43px',
                                    padding: '10px 20px',
                                    color: '#5c8cb4',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    fontFamily: 'Plus Jakarta Sans, Roboto',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
                                        borderColor: '#5c8cb4',
                                        color: '#5c8cb4',
                                    },
                                }}
                            >
                                Let's Talk!
                            </Button>
                        </Box>

                        {/* Mobile Menu Icon */}
                        <IconButton
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                color: '#667eea',
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 250,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                    },
                }}
            >
                <Box sx={{ pt: 8 }}>
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.label} disablePadding>
                                <ListItemButton
                                    onClick={() => scrollToSection(item.href)}
                                    sx={{
                                        borderRadius: '12px',
                                        mx: 1,
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
                                            color: '#667eea',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontWeight: 500,
                                            color: '#495057',
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* Spacer para compensar o header fixo */}
            <Box sx={{ height: '110px' }} />
        </>
    );
};

export default Header;