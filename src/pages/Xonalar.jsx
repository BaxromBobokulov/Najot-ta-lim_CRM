import { useState } from "react";
import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    IconButton,
    Drawer,
    TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseIcon from "@mui/icons-material/Close";
import RefreshIcon from "@mui/icons-material/Refresh";

const initialRooms = [
    { id: 1, name: "genious room", capacity: 15 },
    { id: 2, name: "Impact room", capacity: 12 },
    { id: 3, name: "1A", capacity: 25 },
    { id: 4, name: "205-xona", capacity: 32 },
    { id: 5, name: "16-xona", capacity: 18 },
    { id: 6, name: "5 xona", capacity: 30 },
    { id: 7, name: "IELTS with Islombek", capacity: 20 },
    { id: 8, name: "Beginner", capacity: 18 },
    { id: 9, name: "99", capacity: 25 },
];

export default function Xonalar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <Box sx={{ 
            bgcolor: "white", 
            borderRadius: "12px", 
            p: 3, 
            border: "1px solid #e2e8f0" 
        }}>
            {/* Header section */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#1e293b", fontSize: 18 }}>
                        Xonalar
                    </Typography>
                    <IconButton size="small">
                        <RefreshIcon fontSize="small" sx={{ color: "#64748b" }} />
                    </IconButton>
                </Box>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => setDrawerOpen(true)}
                    sx={{
                        bgcolor: "#a855f7",
                        textTransform: "none",
                        borderRadius: "8px",
                        boxShadow: "none",
                        px: 2,
                        py: 1,
                        fontSize: 13,
                        fontWeight: 600,
                        "&:hover": {
                            bgcolor: "#9333ea",
                            boxShadow: "none",
                        }
                    }}
                >
                    Xonani qo'shish
                </Button>
            </Box>

            {/* Room cards Grid */}
            <Grid container spacing={2}>
                {initialRooms.map((room) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={room.id}>
                        <Card sx={{ 
                            boxShadow: "none", 
                            bgcolor: "#f8fafc", 
                            borderRadius: "10px",
                            border: "none"
                        }}>
                            <CardContent sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                p: '16px !important' 
                            }}>
                                <Box>
                                    <Typography sx={{ fontWeight: 600, fontSize: 13, color: "#1e293b", mb: 0.3 }}>
                                        {room.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: 12, color: "#64748b" }}>
                                        Sig'imi: {room.capacity}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 0.5 }}>
                                    <IconButton size="small" sx={{ color: "#64748b", "&:hover": { color: "#ef4444" } }}>
                                        <DeleteOutlinedIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton size="small" sx={{ color: "#64748b", "&:hover": { color: "#3b82f6" } }}>
                                        <EditOutlinedIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Drawer for Adding Room */}
            <Drawer 
                anchor="right" 
                open={drawerOpen} 
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: { width: 380, p: 3, display: 'flex', flexDirection: 'column' }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: 16, color: "#1e293b" }}>
                        Xonani qo'shish
                    </Typography>
                    <IconButton onClick={() => setDrawerOpen(false)} size="small" sx={{ color: "#64748b" }}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, flex: 1 }}>
                    <Box>
                        <Typography sx={{ fontSize: 13, fontWeight: 500, color: "#1e293b", mb: 1 }}>
                            Nomi <span style={{ color: "#ef4444" }}>*</span>
                        </Typography>
                        <TextField 
                            fullWidth 
                            placeholder="Xona nomi" 
                            size="small"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                    fontSize: 14,
                                    "& fieldset": { borderColor: "#e2e8f0" },
                                }
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 13, fontWeight: 500, color: "#1e293b", mb: 1 }}>
                            Sig'imi <span style={{ color: "#ef4444" }}>*</span>
                        </Typography>
                        <TextField 
                            fullWidth 
                            placeholder="Masalan: 20" 
                            size="small"
                            type="number"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                    fontSize: 14,
                                    "& fieldset": { borderColor: "#e2e8f0" },
                                }
                            }}
                        />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 4, pt: 2, borderTop: "1px solid #e2e8f0" }}>
                    <Button 
                        variant="outlined" 
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                            borderColor: "#e2e8f0",
                            color: "#64748b",
                            textTransform: "none",
                            borderRadius: "8px",
                            px: 3,
                            py: 1,
                            fontWeight: 500,
                            fontSize: 13,
                        }}
                    >
                        Bekor qilish
                    </Button>
                    <Button 
                        variant="contained" 
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                            bgcolor: "#a855f7",
                            color: "white",
                            textTransform: "none",
                            borderRadius: "8px",
                            px: 3,
                            py: 1,
                            fontWeight: 500,
                            fontSize: 13,
                            boxShadow: "none",
                            "&:hover": { bgcolor: "#9333ea", boxShadow: "none" }
                        }}
                    >
                        Saqlash
                    </Button>
                </Box>
            </Drawer>
        </Box>
    );
}
