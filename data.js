const albums = [
    {
        id: 'kill-em-all',
        title: "Kill 'em all",
        cover: 'Images/Killemall.jpg',
        songs: [
            { name: 'Hit the Lights', categories: ['energetic', 'aggressive'] },
            { name: 'The Four Horsemen', categories: ['epic', 'aggressive'] },
            { name: 'Motorbreath', categories: ['energetic', 'rebellious'] },
            { name: 'Jump in the Fire', categories: ['energetic', 'rebellious'] },
            { name: 'Whiplash', categories: ['aggressive', 'rebellious'] },
            { name: 'Phantom Lord', categories: ['aggressive', 'dark'] },
            { name: 'No Remorse', categories: ['aggressive', 'dark'] },
            { name: 'Seek & Destroy', categories: ['rebellious', 'energetic'] },
            { name: 'Metal Militia', categories: ['aggressive', 'rebellious'] }
        ]
    },

        {
        id: 'ride-the-lightning',
        title: "Ride the lightning",
        cover: 'Images/Ridethelightning.jpg',
        songs: [
            { name: 'Fight Fire with Fire', categories: ['aggressive', 'rebellious'] },
            { name: 'Ride the Lightning', categories: ['epic', 'dark'] },
            { name: 'For Whom the Bell Tolls', categories: ['classic', 'dark'] },
            { name: 'Fade to Black', categories: ['melancholic', 'introspective'] },
            { name: 'Trapped Under Ice', categories: ['aggressive', 'energetic'] },
            { name: 'Escape', categories: ['energetic', 'rebellious'] },
            { name: 'Creeping Death', categories: ['dark', 'aggressive'] },
            { name: 'The Call of Ktulu', categories: ['epic', 'introspective'] }
        ]
    },

        {
        id: 'master-of-puppets',
        title: "Master of puppets",
        cover: 'Images/Masterofpuppets.png',
        songs: [
            { name: 'Battery', categories: ['aggressive', 'classic'] },
            { name: 'Master of Puppets', categories: ['epic', 'classic'] },
            { name: 'The Thing That Should Not Be', categories: ['dark', 'introspective'] },
            { name: 'Welcome Home (Sanitarium)', categories: ['melancholic', 'epic'] },
            { name: 'Disposable Heroes', categories: ['aggressive', 'rebellious'] },
            { name: 'Leper Messiah', categories: ['dark', 'aggressive'] },
            { name: 'Orion', categories: ['epic', 'introspective'] },
            { name: 'Damage, Inc.', categories: ['aggressive', 'energetic'] }
        ]
    },

        {
        id: 'and-justice-for-all',
        title: "...and justice for all",
        cover: 'Images/Justiceforall.png',
        songs: [
            { name: 'Blackened', categories: ['aggressive', 'classic'] },
            { name: '...And Justice for All', categories: ['epic', 'introspective'] },
            { name: 'Eye of the Beholder', categories: ['rebellious', 'aggressive'] },
            { name: 'One', categories: ['melancholic', 'classic'] },
            { name: 'The Shortest Straw', categories: ['aggressive', 'dark'] },
            { name: 'Harvester of Sorrow', categories: ['dark', 'melancholic'] },
            { name: 'The Frayed Ends of Sanity', categories: ['aggressive', 'introspective'] },
            { name: 'To Live Is to Die', categories: ['epic', 'introspective'] },
            { name: 'Dyers Eve', categories: ['aggressive', 'rebellious'] }
        ]
    },

        {
        id: 'metallica',
        title: "Metallica (the black album)",
        cover: 'Images/Blackalbum.jpg',
        songs: [
            { name: 'Enter Sandman', categories: ['classic', 'energetic'] },
            { name: 'Sad but True', categories: ['dark', 'classic'] },
            { name: 'Holier Than Thou', categories: ['rebellious', 'aggressive'] },
            { name: 'The Unforgiven', categories: ['melancholic', 'classic'] },
            { name: 'Wherever I May Roam', categories: ['dark', 'introspective'] },
            { name: 'Don\'t Tread on Me', categories: ['rebellious', 'energetic'] },
            { name: 'Through the Never', categories: ['aggressive', 'energetic'] },
            { name: 'Nothing Else Matters', categories: ['melancholic', 'classic'] },
            { name: 'Of Wolf and Man', categories: ['dark', 'energetic'] },
            { name: 'The God That Failed', categories: ['dark', 'introspective'] },
            { name: 'My Friend of Misery', categories: ['melancholic', 'introspective'] },
            { name: 'The Struggle Within', categories: ['aggressive', 'introspective'] }
        ]
    },

        {
        id: 'load',
        title: "Load",
        cover: 'Images/Load.png',
        songs: [
            { name: 'Ain\'t My Bitch', categories: ['rebellious', 'energetic'] },
            { name: '2 X 4', categories: ['aggressive', 'dark'] },
            { name: 'The House Jack Built', categories: ['dark', 'introspective'] },
            { name: 'Until It Sleeps', categories: ['melancholic', 'introspective'] },
            { name: 'King Nothing', categories: ['dark', 'rebellious'] },
            { name: 'Hero of the Day', categories: ['melancholic', 'introspective'] },
            { name: 'Bleeding Me', categories: ['melancholic', 'epic'] },
            { name: 'Cure', categories: ['dark', 'introspective'] },
            { name: 'Poor Twisted Me', categories: ['melancholic', 'dark'] },
            { name: 'Wasting My Hate', categories: ['rebellious', 'aggressive'] },
            { name: 'Mama Said', categories: ['melancholic', 'introspective'] },
            { name: 'Thorn Within', categories: ['dark', 'aggressive'] },
            { name: 'Ronnie', categories: ['melancholic', 'introspective'] },
            { name: 'The Outlaw Torn', categories: ['epic', 'melancholic'] }
        ]
    },

        {
        id: 'reload',
        title: "Reload",
        cover: 'Images/Reload.png',
        songs: [
             { name: 'Fuel', categories: ['energetic', 'classic'] },
            { name: 'The Memory Remains', categories: ['dark', 'classic'] },
            { name: 'Devil\'s Dance', categories: ['dark', 'aggressive'] },
            { name: 'The Unforgiven II', categories: ['melancholic', 'introspective'] },
            { name: 'Better Than You', categories: ['rebellious', 'aggressive'] },
            { name: 'Slither', categories: ['dark', 'aggressive'] },
            { name: 'Carpe Diem Baby', categories: ['rebellious', 'energetic'] },
            { name: 'Bad Seed', categories: ['dark', 'aggressive'] },
            { name: 'Where the Wild Things Are', categories: ['epic', 'dark'] },
            { name: 'Prince Charming', categories: ['rebellious', 'aggressive'] },
            { name: 'Low Man\'s Lyric', categories: ['melancholic', 'introspective'] },
            { name: 'Attitude', categories: ['rebellious', 'aggressive'] },
            { name: 'Fixxxer', categories: ['epic', 'introspective'] }
        ]
    },

        {
        id: 'st-anger',
        title: "St. anger",
        cover: 'Images/Stanger.png',
        songs: [
            { name: 'Frantic', categories: ['aggressive', 'rebellious'] },
            { name: 'St. Anger', categories: ['aggressive', 'rebellious'] },
            { name: 'Some Kind of Monster', categories: ['dark', 'introspective'] },
            { name: 'Dirty Window', categories: ['aggressive', 'dark'] },
            { name: 'Invisible Kid', categories: ['rebellious', 'aggressive'] },
            { name: 'My World', categories: ['rebellious', 'aggressive'] },
            { name: 'Shoot Me Again', categories: ['aggressive', 'rebellious'] },
            { name: 'Sweet Amber', categories: ['melancholic', 'introspective'] },
            { name: 'The Unnamed Feeling', categories: ['melancholic', 'introspective'] },
            { name: 'Purify', categories: ['aggressive', 'dark'] },
            { name: 'All Within My Hands', categories: ['aggressive', 'epic'] }
        ]
    },

    {
        id: 'death-magnetic',
        title: "Death magnetic",
        cover: 'Images/Deathmagnetic.jpg',
        songs: [
            { name: 'That Was Just Your Life', categories: ['aggressive', 'energetic'] },
            { name: 'The End of the Line', categories: ['aggressive', 'rebellious'] },
            { name: 'Broken, Beat & Scarred', categories: ['aggressive', 'rebellious'] },
            { name: 'The Day That Never Comes', categories: ['melancholic', 'epic'] },
            { name: 'All Nightmare Long', categories: ['dark', 'introspective'] },
            { name: 'Cyanide', categories: ['dark', 'aggressive'] },
            { name: 'The Unforgiven III', categories: ['melancholic', 'introspective'] },
            { name: 'The Judas Kiss', categories: ['aggressive', 'dark'] },
            { name: 'Suicide & Redemption', categories: ['epic', 'introspective'] },
            { name: 'My Apocalypse', categories: ['aggressive', 'rebellious'] }
        ]
    },

        {
        id: 'hardwired-to-self-destruct',
        title: "Hardwired...to self-destruct",
        cover: 'Images/Hardwired.png',
        songs: [
            { name: 'Hardwired', categories: ['aggressive', 'energetic'] },
            { name: 'Atlas, Rise!', categories: ['epic', 'energetic'] },
            { name: 'Now That We\'re Dead', categories: ['aggressive', 'rebellious'] },
            { name: 'Moth Into Flame', categories: ['aggressive', 'dark'] },
            { name: 'Dream No More', categories: ['dark', 'introspective'] },
            { name: 'Halo on Fire', categories: ['epic', 'melancholic'] },
            { name: 'Confusion', categories: ['aggressive', 'introspective'] },
            { name: 'ManUNkind', categories: ['rebellious', 'aggressive'] },
            { name: 'Here Comes Revenge', categories: ['rebellious', 'aggressive'] },
            { name: 'Am I Savage?', categories: ['dark', 'introspective'] },
            { name: 'Murder One', categories: ['melancholic', 'introspective'] },
            { name: 'Spit Out the Bone', categories: ['aggressive', 'energetic'] }
        ]
    },

        {
        id: '72-seasons',
        title: "72 seasons",
        cover: 'Images/72seasons.png',
        songs: [
             { name: '72 Seasons', categories: ['aggressive', 'energetic'] },
            { name: 'Shadows Follow', categories: ['dark', 'introspective'] },
            { name: 'Screaming Suicide', categories: ['aggressive', 'rebellious'] },
            { name: 'Sleepwalk My Life Away', categories: ['melancholic', 'introspective'] },
            { name: 'You Must Burn!', categories: ['aggressive', 'rebellious'] },
            { name: 'Lux Æterna', categories: ['energetic', 'aggressive'] },
            { name: 'Crown of Barbed Wire', categories: ['dark', 'aggressive'] },
            { name: 'Chasing Light', categories: ['melancholic', 'introspective'] },
            { name: 'If Darkness Had a Son', categories: ['dark', 'introspective'] },
            { name: 'Too Far Gone?', categories: ['melancholic', 'introspective'] },
            { name: 'Room of Mirrors', categories: ['introspective', 'melancholic'] },
            { name: 'Inamorata', categories: ['epic', 'introspective'] }
        ]
    },

        {
        id: 's-and-m',
        title: "S&M",
        cover: 'Images/S&m.png',
        songs: [
            { name: 'The Ecstasy of Gold', categories: ['epic', 'classic'] },
            { name: 'The Call of Ktulu', categories: ['epic', 'introspective'] },
            { name: 'Master of Puppets', categories: ['epic', 'classic'] },
            { name: 'Of Wolf and Man', categories: ['dark', 'energetic'] },
            { name: 'The Thing That Should Not Be', categories: ['dark', 'introspective'] },
            { name: 'Fuel', categories: ['energetic', 'classic'] },
            { name: 'The Memory Remains', categories: ['dark', 'classic'] },
            { name: 'No Leaf Clover', categories: ['epic', 'melancholic'] },
            { name: 'Hero of the Day', categories: ['melancholic', 'introspective'] },
            { name: 'Devil\'s Dance', categories: ['dark', 'aggressive'] },
            { name: 'Bleeding Me', categories: ['melancholic', 'epic'] },
            { name: 'Nothing Else Matters', categories: ['melancholic', 'classic'] },
            { name: 'Until It Sleeps', categories: ['melancholic', 'introspective'] },
            { name: 'For Whom the Bell Tolls', categories: ['classic', 'dark'] },
            { name: 'Human', categories: ['melancholic', 'introspective'] },
            { name: 'Wherever I May Roam', categories: ['dark', 'introspective'] },
            { name: 'Outlaw Torn', categories: ['epic', 'melancholic'] },
            { name: 'Sad but True', categories: ['dark', 'classic'] },
            { name: 'One', categories: ['melancholic', 'classic'] },
            { name: 'Enter Sandman', categories: ['classic', 'energetic'] },
            { name: 'Battery', categories: ['aggressive', 'classic'] }
        ]
    }
];