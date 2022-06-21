const { Post } = require('../models');

const postData = [
    {
        header: 'Saw a bird',
        text: 'Today on my walk I saw a beautiful blue bird.',
        date: 'April 2, 2022 09:45:00',
        user_id: '1'
    },
    {
        header: 'Saw a snail',
        text: 'Today on my walk I saw a beautiful brown snail. He was slow.',
        date: 'April 3, 2022 09:45:00',
        user_id: '1'
    },
    {
        header: 'Saw a cat',
        text: 'Today on my walk I saw a beautiful black cat. She was very fast',
        date: 'April 4, 2022 09:45:00',
        user_id: '1'
    },
    {
        header: 'I hate studying',
        text: 'My chemistry class is really hard. I made a billion flashcards and I still cannot remember anything. Send help.',
        date: 'April 9, 2022 19:43:00',
        user_id: '2'
    },
    {
        header: 'Chemistry sucks',
        text: 'Just got a 59% on my Chemistry test. The flash cards did not help. Retaking it next week.',
        date: 'April 14, 2022 16:15:00',
        user_id: '2'
    },
    {
        header: 'Passed Chem!',
        text: 'I studied more than I thought was humanly possible and got 88% on my retake of the final. Hooray!',
        date: 'April 21, 2022 16:17:00',
        user_id: '2'
    },
];

const postSeeds = () => Post.bulkCreate(postData);
module.exports = postSeeds;