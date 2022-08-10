export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    username: 'ID',
    width: 230,
    renderCell: (params) => {
      return (
        <>
          <div className="cellWithImg">
            <img
              className="cellImg"
              src={params.row.img}
              alt={params.row.username}
            />
            <span>{params.row.username}</span>
          </div>
        </>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 230,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: 'jhouseman0',
    img: 'http://dummyimage.com/160x100.png/dddddd/000000',
    email: 'dmansford0@purevolume.com',
    status: 'active',
    age: 103,
  },
  {
    id: 2,
    username: 'mfulford1',
    img: 'http://dummyimage.com/206x100.png/dddddd/000000',
    email: 'emcart1@jiathis.com',
    status: 'active',
    age: 49,
  },
  {
    id: 3,
    username: 'nfairest2',
    img: 'http://dummyimage.com/104x100.png/cc0000/ffffff',
    email: 'sstanex2@nbcnews.com',
    status: 'pending',
    age: 20,
  },
  {
    id: 4,
    username: 'wkunes3',
    img: 'http://dummyimage.com/244x100.png/cc0000/ffffff',
    email: 'dglanton3@reverbnation.com',
    status: 'active',
    age: 54,
  },
  {
    id: 5,
    username: 'hadshed4',
    img: 'http://dummyimage.com/156x100.png/5fa2dd/ffffff',
    email: 'binsko4@list-manage.com',
    status: 'active',
    age: 105,
  },
  {
    id: 6,
    username: 'lauchterlony5',
    img: 'http://dummyimage.com/218x100.png/cc0000/ffffff',
    email: 'gparkeson5@geocities.com',
    status: 'Male',
    age: 61,
  },
  {
    id: 7,
    username: 'rmordy6',
    img: 'http://dummyimage.com/237x100.png/dddddd/000000',
    email: 'mpleavin6@wired.com',
    status: 'active',
    age: 84,
  },
  {
    id: 8,
    username: 'mhothersall7',
    img: 'http://dummyimage.com/113x100.png/dddddd/000000',
    email: 'wlightwood7@weebly.com',
    status: 'pending',
    age: 26,
  },
  {
    id: 9,
    username: 'eartharg8',
    img: 'http://dummyimage.com/184x100.png/cc0000/ffffff',
    email: 'mburchnall8@over-blog.com',
    status: 'pending',
    age: 85,
  },
  {
    id: 10,
    username: 'mmaclese9',
    img: 'http://dummyimage.com/233x100.png/dddddd/000000',
    email: 'gruller9@joomla.org',
    status: 'active',
    age: 52,
  },
];
