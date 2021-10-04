export default function handler(req, res) {
  const { vendorId } = req.query;
  switch (req.method) {
    case 'GET':
      res.json({
        vendorId: vendorId,
        name: 'vendor',
        catagory: 'bevrages',
        address: 'Vella wines, 345',
        contact: '7789652366',
      });
  }
}
