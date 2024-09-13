"use client"
import React, { useState } from 'react';
import { Card, CardContent, Avatar, Typography, Button, Box, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProfileCard = () => {
  const [activeTab, setActiveTab] = useState('About');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Card style={{ margin: '0 auto', borderRadius: 10, padding: 40 }}>
      <Box display="flex" alignItems="center">
        <Avatar
          alt="John Doe"
          src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png"
          sx={{ width: 100, height: 100 }}
          style={{ marginRight: 20 }}
        />
        <Box flexGrow={1}>
          <Typography variant="h5" component="h2" style={{ fontWeight: 'bold' }}>
            John Doe <span style={{ color: 'green' }}>✔</span>
          </Typography>
          <Typography variant="body1" color="textSecondary">
            CEO Microsoft
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Independent Director, Google Software
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Estes Park, Colorado, United States
          </Typography>
          <Box mt={1}>
            <Link href="#" color="primary">
              LinkedIn
            </Link>
          </Box>
        </Box>
        <Button
          variant="outlined"
          color="error"
          startIcon={<EditIcon />}
          style={{ height: 40 }}
        >
          Edit
        </Button>
      </Box>

      {/* Tab Navigation */}
      <Box mt={2}>
        <Box display="flex" justifyContent="flex-start" borderBottom="1px solid #e0e0e0">
          {['About', 'Experience', 'Expertise', 'Area of Interests', 'Honors & Awards'].map(
            (tab) => (
              <Button
                key={tab}
                onClick={() => handleTabClick(tab)}
                style={{
                  fontWeight: activeTab === tab ? 'bold' : 'normal',
                  color: activeTab === tab ? '#000000' : '#666666',
                  borderBottom: activeTab === tab ? '3px solid #000000' : 'none',
                  borderRadius: 0,
                  paddingBottom: '10px',
                }}
              >
                {tab}
              </Button>
            )
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default ProfileCard;
