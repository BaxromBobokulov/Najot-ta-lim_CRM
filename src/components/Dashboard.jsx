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
    Collapse,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import BadgeIcon from "@mui/icons-material/Badge";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import Xonalar from "../pages/Xonalar";
import Kurslar from "../pages/Kurslar";

const DRAWER_WIDTH = 230;

const navItems = [
    { label: "Asosiy",        icon: <HomeIcon fontSize="small" /> },
    { label: "O'qituvchilar", icon: <PeopleIcon fontSize="small" /> },
    { label: "Guruhlar",      icon: <SchoolIcon fontSize="small" /> },
    { label: "Talabalar",     icon: <PersonIcon fontSize="small" /> },
    { label: "Sovg'alar",     icon: <CardGiftcardIcon fontSize="small" /> },
    { label: "Moliya",        icon: <MonetizationOnIcon fontSize="small" /> },
];

const boshqaruvItems = [
    { label: "Kurslar",        icon: <MenuBookIcon fontSize="small" /> },
    { label: "Xonalar",        icon: <MeetingRoomIcon fontSize="small" /> },
    { label: "Hodimlar",       icon: <BadgeIcon fontSize="small" /> },
    { label: "Rollar",         icon: <AdminPanelSettingsIcon fontSize="small" /> },
    { label: "Xabar Yuborish", icon: <SendIcon fontSize="small" /> },
    { label: "FAQ",            icon: <HelpIcon fontSize="small" /> },
    { label: "Tekshiruv",      icon: <FactCheckIcon fontSize="small" /> },
];

const stats = [
    { label: "Sinflar",       value: 0,  icon: <SchoolIcon sx={{ color: "#7c3aed", fontSize: 28 }} /> },
    { label: "Fanlar",        value: 0,  icon: <MenuBookIcon sx={{ color: "#7c3aed", fontSize: 28 }} /> },
    { label: "Talabalar",     value: 1,  icon: <PersonIcon sx={{ color: "#7c3aed", fontSize: 28 }} /> },
    { label: "Sovg'alar",     value: 3,  icon: <CalendarMonthIcon sx={{ color: "#7c3aed", fontSize: 28 }} /> },
    { label: "O'qituvchilar", value: 0,  icon: <PeopleIcon sx={{ color: "#7c3aed", fontSize: 28 }} /> },
];

export default function Dashboard() {
    const [activeNav,       setActiveNav]       = useState(0);
    const [language,        setLanguage]        = useState("O'zbekcha");
    const [darkMode,        setDarkMode]        = useState(false);
    const [boshqaruvOpen,   setBoshqaruvOpen]   = useState(false);
    const [activeSub,       setActiveSub]       = useState(null);

    return (
        <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f1f5f9" }}>

            {/* ───────────── SIDEBAR ───────────── */}
            <Drawer
                variant="permanent"
                anchor="left"
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
                        overflowX: "hidden",
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
                        <Typography sx={{ color: "white", fontWeight: 800, fontSize: 18 }}>N</Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 17, color: "#1e293b" }}>
                        Najot ta'lim
                    </Typography>
                </Box>

                {/* Nav Items */}
                <List sx={{ px: 1.5, flex: 1 }}>
                    {navItems.map((item, idx) => (
                        <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                            <ListItemButton
                                onClick={() => { setActiveNav(idx); setBoshqaruvOpen(false); setActiveSub(null); }}
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

                    {/* ── Boshqaruv ── */}
                    <ListItem disablePadding sx={{ mb: 0.5 }}>
                        <ListItemButton
                            onClick={() => {
                                setBoshqaruvOpen((prev) => !prev);
                                setActiveNav(-1);
                            }}
                            sx={{
                                borderRadius: "10px",
                                bgcolor: boshqaruvOpen ? "#7c3aed" : "transparent",
                                color: boshqaruvOpen ? "white" : "#64748b",
                                "&:hover": {
                                    bgcolor: boshqaruvOpen ? "#6d28d9" : "#f1f5f9",
                                },
                                py: 1,
                                px: 1.5,
                            }}
                        >
                            <ListItemIcon sx={{ color: boshqaruvOpen ? "white" : "#64748b", minWidth: 34 }}>
                                <ManageAccountsIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                                primary="Boshqaruv"
                                primaryTypographyProps={{ fontSize: 13, fontWeight: boshqaruvOpen ? 600 : 400 }}
                            />
                            {boshqaruvOpen
                                ? <ExpandLessIcon fontSize="small" sx={{ color: "white" }} />
                                : <ExpandMoreIcon fontSize="small" sx={{ color: "#94a3b8" }} />
                            }
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            {/* ───────────── BOSHQARUV SECOND PANEL (slides in from left) ───────────── */}
            <Box
                sx={{
                    width: boshqaruvOpen ? 200 : 0,
                    minWidth: boshqaruvOpen ? 200 : 0,
                    overflow: "hidden",
                    transition: "width 0.28s cubic-bezier(0.4,0,0.2,1), min-width 0.28s cubic-bezier(0.4,0,0.2,1)",
                    flexShrink: 0,
                    bgcolor: "#fafaff",
                    borderRight: boshqaruvOpen ? "1px solid #e2e8f0" : "none",
                    display: "flex",
                    flexDirection: "column",
                    pt: 2,
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    alignSelf: "flex-start",
                }}
            >
                <Typography
                    sx={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#94a3b8",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        px: 2,
                        mb: 1,
                        whiteSpace: "nowrap",
                    }}
                >
                    Boshqaruv
                </Typography>
                <List sx={{ px: 1 }}>
                    {boshqaruvItems.map((sub) => (
                        <ListItem key={sub.label} disablePadding sx={{ mb: 0.3 }}>
                            <ListItemButton
                                onClick={() => setActiveSub(sub.label)}
                                sx={{
                                    borderRadius: "8px",
                                    bgcolor: activeSub === sub.label ? "#ede9fe" : "transparent",
                                    color: activeSub === sub.label ? "#7c3aed" : "#64748b",
                                    "&:hover": { bgcolor: "#f0ebff" },
                                    py: 0.8,
                                    px: 1.2,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: activeSub === sub.label ? "#7c3aed" : "#94a3b8",
                                        minWidth: 30,
                                    }}
                                >
                                    {sub.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={sub.label}
                                    primaryTypographyProps={{
                                        fontSize: 12.5,
                                        fontWeight: activeSub === sub.label ? 600 : 400,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

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
                    {activeSub === "Kurslar" ? (
                        <Kurslar />
                    ) : activeSub === "Xonalar" ? (
                        <Xonalar />
                    ) : (
                        <>
                            {/* Greeting */}
                            <Typography variant="h5" sx={{ fontWeight: 700, color: "#1e293b", mb: 0.4 }}>
                                Salom, dasturchi!
                            </Typography>
                            <Typography sx={{ fontSize: 13, color: "#64748b", mb: 3 }}>
                                Najot ta'lim platformasiga xush kelibsiz!
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
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
}