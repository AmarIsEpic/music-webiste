const personalities = {
    'thrasher' : {
        title: 'THE THRASHER',
        taglines: [
            'Pure adrenaline runs through your venis',
            'Speed is your religion, chaos is your church',
            'You were born in a mosh pit'
        ],
        descriptions: [
            'You live for speed, chaos, and the mosh pit. Subtlety? Not in your vocabulary. When the drums kick in and the riffs shred, you\'re already three steps ahead, headbanging like there\'s no tomorrow.',
            'Slow songs put you to sleep. You need that raw, unfiltered energy that makes your blood boil and your fists pump. The faster, the louder, the better—that\'s your motto.',
            'You don\'t just listen to Metallica—you feel it in your bones. Every blast beat is a heartbeat, every riff is a battle cry. Peace and quiet? Never heard of it.'
        ],
        recommendations: ['Damege, Inc', 'Dyres Eve', 'Spit Out the Bone']
    },

        'dark_soul' : {
        title: 'THE DARK SOUL',
        taglines: [
            'You find beauty in the shadows',
            'Darkness is your comfort zone',
            'The abyss stares back, and you wave'
        ],
        descriptions: [
              'Pain and darkness don\'t scare you—they fascinate you. You embrace the heaviness of existence and find poetry in the doom. Where others see bleakness, you see truth.',
            'You\'re drawn to the songs that others skip—the heavy, brooding, ominous tracks that make people uncomfortable. That discomfort? That\'s where you thrive.',
            'Light and happy music? Please. You want the stuff that crawls under your skin and makes you think about mortality, power, and the weight of the world.'
        ],
        recommendations: ['The Thing That Should Not Be', 'Bleeding Me', 'Dream No More']
    },

        'philosopher' : {
        title: 'THE PHILOSOPHER',
        taglines: [
            'You seek meaning in every note',
            'Complexity is your comfort food',
            'Three-minute songs are an insult to your intelligence'
        ],
        descriptions: [
           'Long songs don\'t bore you—they complete you. You appreciate complexity, depth, and the journey. An 8-minute instrumental? Perfect. A song that takes you through five different movements? Even better.',
            'You don\'t just hear music—you dissect it. Every tempo change, every lyrical metaphor, every instrumental section is a piece of a puzzle you\'re eager to solve.',
            'While others want instant gratification, you want art. You want songs that challenge you, that make you think, that reveal new layers with every listen.'
        ],
        recommendations: ['To Live Is to Die', 'Fixxxer', 'Inamorata']
    },

        'arena_warrior' : {
        title: 'THE ARENA WARRIOR',
        taglines: [
            'You want the full stadium experience',
            'Go big or go home',
            'Your playlist is a highlight reel'
        ],
        descriptions: [
            'Big songs, big emotions, big moments. You\'re here for the spectacle and the glory. The songs that fill arenas and make crowds lose their minds? That\'s your sweet spot.',
            'You want the anthems, the sing-alongs, the tracks that give you chills every single time. Medium energy is not in your vocabulary—it\'s either epic or nothing.',
            'You live for those moments when 80,000 people sing the same lyrics at the same time. Music isn\'t background noise for you—it\'s an event, a celebration, a shared experience.'
        ],
        recommendations: ['Master of Puppets', 'One', 'Nothing Else Matters']
    },

        'rebel' : {
        title: 'THE REBEL',
        taglines: [
            'Rules were made to be broken',
            'Authority means nothing to you',
            'You make your own path'
        ],
        descriptions: [
            'Authority means nothing to you. You live loud, fast, and on your own terms. Tell you what to do? Good luck with that. You\'re here to rage against the machine.',
            'You don\'t follow trends—you set them. Or better yet, you ignore them completely. Conformity is the enemy, and you\'re allergic to being told how to live.',
            'Your life philosophy: question everything, trust no one in power, and turn it up to 11. Society\'s rules? They don\'t apply to you.'
        ],
        recommendations: ['Seek & Destroy', 'St. Anger', 'My Apocalypse']
    },

        'romanticist' : {
        title: 'THE REBEL',
        taglines: [
            'Emotions are your superpower',
            'You feel everything, deeply',
            'Tears and headbanging can coexist'
        ],
        descriptions: [
            'You\'re not afraid to feel everything deeply. Beauty and sadness walk hand in hand for you. A song that makes you cry is just as powerful as one that makes you rage.',
            'Emotional vulnerability isn\'t weakness—it\'s strength. You connect with the songs that lay it all bare, that expose the raw human experience without apology.',
            'You want music that moves you, that speaks to your soul, that makes you feel alive. Whether it\'s pain, love, loss, or longing—you\'re here for all of it.'
        ],
        recommendations: ['Fade to Black', 'The Unforgiven', 'The Day That Never Comes']
    },

        'purist' : {
        title: 'THE PURIST',
        taglines: [
            'Old school or no school',
            'The \'80s were peak Metallica',
            'You know when they peaked'
        ],
        descriptions: [
            'You know exactly when Metallica peaked. The \'80s thrash sound is untouchable, and nothing they\'ve done since comes close. It\'s not nostalgia—it\'s objective truth.',
            'Modern production? Too clean. Newer albums? Too polished. You want that raw, aggressive, no-compromise sound that defined a generation and changed metal forever.',
            'You were there (in spirit, at least) when thrash metal was born. Speed, aggression, and technical prowess—that\'s what metal should be, and you won\'t settle for less.'
        ],
        recommendations: ['Battery', 'Blackened', '...And Justice for All']
    },

        'headbanger' : {
        title: 'THE HEADBANGER',
        taglines: [
            'Life is one endless mosh pit',
            'Your neck has permanent damage',
            'Sleep is for the weak'
        ],
        descriptions: [
            'Fast, loud, and in your face—exactly how you like it. Sleep is for the weak, and so is sitting still. When the music hits, you move. It\'s not a choice—it\'s instinct.',
            'You\'re the person in the front row with whiplash and a smile. Energy is everything. If a song doesn\'t make you want to destroy furniture, what\'s the point?',
            'Life is short, so you live it at full volume. Subtlety is overrated. Give you a riff, a beat, and a reason to lose control, and you\'re happy.'
        ],
        recommendations: ['Hit the Lights', 'Fuel', 'Hardwired']
    },

        'epicist' : {
        title: 'THE EPICIST',
        taglines: [
            'Why say it in 3 minutes when 10 will do?',
            'Short songs leave you unsatisfied',
            'You want the full journey'
        ],
        descriptions: [
              'You want the full journey. Short songs leave you unsatisfied—where\'s the buildup? Where\'s the climax? Where\'s the resolution? Give you 10 minutes of instrumental storytelling, and you\'re in heaven.',
            'Music is an experience, not a commodity. You want songs that take you somewhere, that make you forget about time, that transport you to another world.',
            'You appreciate the craft, the composition, the artistry. A song isn\'t just chords and lyrics—it\'s architecture. And you want to explore every room.'
        ],
        recommendations: ['The Call of Ktulu', 'Suicide & Redemption', 'Inamorata']
    },
};