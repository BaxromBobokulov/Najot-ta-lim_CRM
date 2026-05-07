import { useEffect, useState } from "react";
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
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    Tabs,
    Tab
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseIcon from "@mui/icons-material/Close";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import axios from "axios";

const GET_API = "http://localhost:3000/courses/all"
const POST_API = "http://localhost:3000/courses"

const postCourse = async (data) => {
    try {
        const response = await axios.post(POST_API, data, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data
    } catch (error) {
        console.log(error);
    }
}

const getCourses = async () => {
    try {
        const response = await fetch(GET_API, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}

let courser_data = await getCourses();

const colors = ["#1e293b", "#7c3aed", "#dc2626", "#ea580c", "#16a34a", "#0284c7", "#4f46e5", "#9333ea", "#db2777"];

export default function Kurslar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [tabVal, setTabVal] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [duration_hours, setDurationHours] = useState("");
    const [duration_month, setDurationMonth] = useState("");
    const [color, setColor] = useState("");

    const data = {
        name,
        description,
        price,
        duration_hours,
        duration_month,
        color
    }

    useEffect(() => {
        getCourses();
    }, []);

    return (
        <Box sx={{
            bgcolor: "white",
            borderRadius: "12px",
            p: 3,
            border: "1px solid #e2e8f0"
        }}>
            {/* Header section */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "#1e293b", fontSize: 18 }}>
                    Kurslar
                </Typography>
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
                        py: 0.8,
                        fontSize: 13,
                        fontWeight: 600,
                        "&:hover": {
                            bgcolor: "#9333ea",
                            boxShadow: "none",
                        }
                    }}
                >
                    Kurslar qoshish
                </Button>
            </Box>

            {/* Sub Tabs */}


            {/* Courses Grid */}
            <Grid container spacing={2}>
                {courser_data.map((course) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
                        <Card sx={{
                            boxShadow: "none",
                            bgcolor: course.color,
                            borderRadius: "10px",
                            border: "1px solid rgba(0,0,0,0.03)",
                            width: "350px"
                        }}>
                            <CardContent sx={{ p: '16px !important' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                                    <Box sx={{ pr: 1 }}>
                                        <Typography sx={{ fontWeight: 600, fontSize: 13, color: "#1e293b", mb: 0.5, lineHeight: 1.3 }}>
                                            {course.name}
                                        </Typography>
                                        <Typography sx={{ fontSize: 11.5, color: "#64748b", mb: 1.5, lineHeight: 1.4 }}>
                                            {course.description}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 0 }}>
                                        <IconButton size="small" sx={{ color: "#64748b", p: 0.5 }}>
                                            <DeleteOutlinedIcon fontSize="small" sx={{ fontSize: 18 }} />
                                        </IconButton>
                                        <IconButton size="small" sx={{ color: "#64748b", p: 0.5 }}>
                                            <EditOutlinedIcon fontSize="small" sx={{ fontSize: 18 }} />
                                        </IconButton>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Box sx={{ bgcolor: 'white', px: 1, py: 0.3, borderRadius: '4px', border: '1px solid #e2e8f0', fontSize: 11, fontWeight: 500, color: '#475569' }}>
                                        {course.duration_hours} minut
                                    </Box>
                                    <Box sx={{ bgcolor: 'white', px: 1, py: 0.3, borderRadius: '4px', border: '1px solid #e2e8f0', fontSize: 11, fontWeight: 500, color: '#475569' }}>
                                        {course.duration_month} oy
                                    </Box>
                                    <Box sx={{ bgcolor: 'white', px: 1, py: 0.3, borderRadius: '4px', border: '1px solid #e2e8f0', fontSize: 11, fontWeight: 500, color: '#475569' }}>
                                        {course.price} so'm
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Drawer for Adding Course */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: { width: 380, display: 'flex', flexDirection: 'column' }
                }}
            >
                {/* Header */}
                <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #f1f5f9' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: 18, color: "#1e293b" }}>
                            Kurs qoshish
                        </Typography>
                        <IconButton onClick={() => setDrawerOpen(false)} size="small" sx={{ color: "#64748b" }}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    <Typography sx={{ fontSize: 12.5, color: "#64748b" }}>
                        Bu yerda siz yangi Kurs qo'shishingiz mumkin.
                    </Typography>
                </Box>

                {/* Body Scrolling Area */}
                <Box sx={{ p: 3, flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    <Box>
                        <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#1e293b", mb: 0.8 }}>
                            Nomi
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="Bootcamp Foundation"
                            size="small"
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "8px", fontSize: 14 }
                            }}
                        />
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#1e293b", mb: 0.8 }}>
                            Dars davomiyligi
                        </Typography>
                        <Select fullWidth size="small" displayEmpty value="" sx={{ borderRadius: "8px", fontSize: 14, bgcolor: "#f8fafc" }}>
                            <MenuItem value="">Tanlang</MenuItem>
                        </Select>
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#1e293b", mb: 0.8 }}>
                            Kurs davomiyligi (oylarda)
                        </Typography>
                        <Select fullWidth size="small" displayEmpty value="" sx={{ borderRadius: "8px", fontSize: 14, bgcolor: "#f8fafc" }}>
                            <MenuItem value="">Tanlang</MenuItem>
                        </Select>
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#1e293b", mb: 0.8 }}>
                            Narx
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="Narxini kiriting"
                            size="small"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><AttachMoneyIcon fontSize="small" /></InputAdornment>
                            }}
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px", fontSize: 14 } }}
                        />
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#1e293b", mb: 0.8 }}>
                            Description
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            placeholder="A little about the company and the team that you'll be working with."
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px", fontSize: 14 } }}
                        />
                        <Typography sx={{ fontSize: 11, color: "#64748b", mt: 0.6 }}>
                            This is a hint text to help user.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#1e293b", mb: 0.2 }}>
                            Rangi
                        </Typography>
                        <Typography sx={{ fontSize: 11.5, color: "#64748b", mb: 1.5, lineHeight: 1.3 }}>
                            The color you choose will be displayed to users and in the list of roles.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1.2, flexWrap: 'wrap' }}>
                            {colors.map((c, i) => (
                                <Box key={i} sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: c, cursor: 'pointer', transition: 'transform 0.1s', '&:hover': { transform: 'scale(1.1)' } }} />
                            ))}
                        </Box>
                    </Box>

                </Box>

                {/* Footer */}
                <Box sx={{ p: 3, pt: 2, borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: 1.5, bgcolor: 'white' }}>
                    <Button
                        variant="outlined"
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                            borderColor: "#e2e8f0", color: "#1e293b", textTransform: "none", borderRadius: "8px", px: 3, py: 1, fontWeight: 500, fontSize: 13,
                        }}
                    >
                        Bekor qilish
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setDrawerOpen(false);
                            postCourse(data);
                        }}
                        sx={{
                            bgcolor: "#a855f7", color: "white", textTransform: "none", borderRadius: "8px", px: 3, py: 1, fontWeight: 500, fontSize: 13, boxShadow: "none", "&:hover": { bgcolor: "#9333ea", boxShadow: "none" }
                        }}
                    >
                        Saqlash
                    </Button>
                </Box>
            </Drawer>
        </Box>
    );
}
