export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json([
        {
          name: 'vend-1',
          isVerified: true,
          catagory: 'vegetables',
          address: 'Bivy hills',
          contact: '7785412588',
        },
        {
          name: 'vend-2',
          isVerified: false,
          catagory: 'vegetables',
          address: 'Bivy hills',
          contact: '7785412588',
        },
      ]);
  }
}
