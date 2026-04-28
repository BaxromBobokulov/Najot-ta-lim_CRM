import { useState } from "react";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Avatar,
    IconButton,
    Select,
    MenuItem,
    Card,
    CardContent,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RefreshIcon from "@mui/icons-material/Refresh";

const DRAWER_WIDTH = 230;

const navItems = [
    { label: "Asosiy",        icon: <HomeIcon fontSize="small" /> },
    { label: "O'qituvchilar", icon: <PeopleIcon fontSize="small" /> },
    { label: "Sinflar",       icon: <SchoolIcon fontSize="small" /> },
    { label: "Talabalar",     icon: <PersonIcon fontSize="small" /> },
    { label: "Sovg'alar",     icon: <CardGiftcardIcon fontSize="small" /> },
    { label: "Boshqarish",    icon: <ManageAccountsIcon fontSize="small" /> },
];

const stats = [
    { label: "Sinflar",       value: 0,  icon: <SchoolIcon sx={{ color: "#7c3aed", fontSize: 28 }} /> },
    { label: "Fanlar",        value: 0,  icon: <MenuBookIcon sx={{ color: "#7c3aed", fontSize: 28 }} /> },
    { label: "Talabalar",     value: 1,  icon: <PersonIcon sx={{ color: "#7c3aed", fontSize: 28 }} /> },
    { label: "Sovg'alar",     value: 3,  icon: <CalendarMonthIcon sx={{ color: "#7c3aed", fontSize: 28 }} /> },
    { label: "O'qituvchilar", value: 0,  icon: <PeopleIcon sx={{ color: "#7c3aed", fontSize: 28 }} /> },
];

export default function Dashboard() {
    const [activeNav, setActiveNav]   = useState(0);
    const [language,  setLanguage]    = useState("O'zbekcha");
    const [darkMode,  setDarkMode]    = useState(false);

    return (
        <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f1f5f9" }}>

            {/* ───────────── SIDEBAR ───────────── */}
            <Drawer
                variant="permanent"
                sx={{
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: DRAWER_WIDTH,
                        boxSizing: "border-box",
                        bgcolor: "#ffffff",
                        borderRight: "1px solid #e2e8f0",
                        display: "flex",
                        flexDirection: "column",
                    },
                }}
            >
                {/* Logo */}
                <Box sx={{ p: 2.5, display: "flex", alignItems: "center", gap: 1.2 }}>
                    <Box
                        sx={{
                            width: 34,
                            height: 34,
                            bgcolor: "#7c3aed",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography sx={{ color: "white", fontWeight: 800, fontSize: 18 }}>E</Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 17, color: "#1e293b" }}>
                        EduCoin
                    </Typography>
                </Box>

                {/* Nav Items */}
                <List sx={{ px: 1.5, flex: 1 }}>
                    {navItems.map((item, idx) => (
                        <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                            <ListItemButton
                                onClick={() => setActiveNav(idx)}
                                sx={{
                                    borderRadius: "10px",
                                    bgcolor: activeNav === idx ? "#7c3aed" : "transparent",
                                    color: activeNav === idx ? "white" : "#64748b",
                                    "&:hover": {
                                        bgcolor: activeNav === idx ? "#6d28d9" : "#f1f5f9",
                                    },
                                    py: 1,
                                    px: 1.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: activeNav === idx ? "white" : "#64748b",
                                        minWidth: 34,
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontSize: 13,
                                        fontWeight: activeNav === idx ? 600 : 400,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                {/* Subscription Card */}
                <Box sx={{ p: 2 }}>
                    <Card
                        sx={{
                            bgcolor: "#fffbeb",
                            borderRadius: 2,
                            boxShadow: "none",
                            border: "1px solid #fde68a",
                        }}
                    >
                        <CardContent sx={{ p: 1.5, "&:last-child": { pb: 1.5 } }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                                <Avatar
                                    sx={{
                                        width: 30,
                                        height: 30,
                                        bgcolor: "#f59e0b",
                                        fontSize: 13,
                                        fontWeight: 700,
                                    }}
                                >
                                    O
                                </Avatar>
                                <Box>
                                    <Typography sx={{ fontSize: 12, fontWeight: 600, color: "#92400e" }}>
                                        Obuna
                                    </Typography>
                                    <Typography sx={{ fontSize: 11, color: "#b45309" }}>
                                        Obunangiz tugagan
                                    </Typography>
                                </Box>
                            </Box>
                            <Button
                                fullWidth
                                size="small"
                                startIcon={<RefreshIcon sx={{ fontSize: 14 }} />}
                                sx={{
                                    mt: 1,
                                    bgcolor: "#ef4444",
                                    color: "white",
                                    fontSize: 11,
                                    textTransform: "none",
                                    borderRadius: 1.5,
                                    fontWeight: 600,
                                    "&:hover": { bgcolor: "#dc2626" },
                                }}
                            >
                                Obunani yangilash
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </Drawer>

            {/* ───────────── MAIN AREA ───────────── */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>

                {/* Top Bar */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        px: 3,
                        py: 1.2,
                        bgcolor: "white",
                        borderBottom: "1px solid #e2e8f0",
                        gap: 1.5,
                    }}
                >
                    <Select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        size="small"
                        sx={{
                            fontSize: 12,
                            height: 34,
                            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#e2e8f0" },
                        }}
                    >
                        <MenuItem value="O'zbekcha" sx={{ fontSize: 12 }}>O'zbekcha</MenuItem>
                        <MenuItem value="Русский"   sx={{ fontSize: 12 }}>Русский</MenuItem>
                        <MenuItem value="English"   sx={{ fontSize: 12 }}>English</MenuItem>
                    </Select>

                    <IconButton
                        size="small"
                        onClick={() => setDarkMode(!darkMode)}
                        sx={{ bgcolor: "#f1f5f9", borderRadius: 2 }}
                    >
                        {darkMode
                            ? <LightModeIcon fontSize="small" />
                            : <DarkModeIcon  fontSize="small" />
                        }
                    </IconButton>

                    <Avatar sx={{ width: 34, height: 34, bgcolor: "#7c3aed", fontSize: 14 }}>C</Avatar>
                </Box>

                {/* Page Content */}
                <Box sx={{ p: 3 }}>

                    {/* Greeting */}
                    <Typography variant="h5" sx={{ fontWeight: 700, color: "#1e293b", mb: 0.4 }}>
                        Salom, creator!
                    </Typography>
                    <Typography sx={{ fontSize: 13, color: "#64748b", mb: 3 }}>
                        EduCoin platfomasiga xush kelibsiz!
                    </Typography>

                    {/* Stats Cards */}
                    <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
                        {stats.map((stat) => (
                            <Card
                                key={stat.label}
                                sx={{
                                    flex: "1 1 140px",
                                    borderRadius: 3,
                                    boxShadow: "none",
                                    border: "1px solid #e2e8f0",
                                    bgcolor: "white",
                                }}
                            >
                                <CardContent sx={{ textAlign: "center", py: 3 }}>
                                    <Box sx={{ mb: 1 }}>{stat.icon}</Box>
                                    <Typography sx={{ fontSize: 12, color: "#64748b", mb: 0.5 }}>
                                        {stat.label}
                                    </Typography>
                                    <Typography sx={{ fontSize: 26, fontWeight: 700, color: "#1e293b" }}>
                                        {stat.value}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>

                    {/* Dars Jadvali Accordion */}
                    <Accordion
                        sx={{
                            borderRadius: "12px !important",
                            boxShadow: "none",
                            border: "1px solid #e2e8f0",
                            bgcolor: "white",
                            "&:before": { display: "none" },
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2.5 }}>
                            <Typography sx={{ fontWeight: 600, fontSize: 14, color: "#1e293b" }}>
                                Dars Jadvali
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: 2.5 }}>
                            <Typography sx={{ fontSize: 13, color: "#64748b" }}>
                                Hozircha dars jadvali mavjud emas.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </Box>
            </Box>
        </Box>
    );
}