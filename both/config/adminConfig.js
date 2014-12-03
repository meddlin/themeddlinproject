
/*Customization
icon -- FontAwesome icon codes, leave off the "fa-" at the beginning of the code
*/

var AdminConfig;
AdminConfig =
{
  name: Config.name,
  adminEmails: ['user1@email.com', 'admin@email.com'],
  collections: {
    NetworkTools: {
      icon: 'sitemap',
      color: 'red'
    },
    OperatingSystems: {
      icon: 'desktop',
      color: 'red',
      tableColumns: [
        {label: 'Name', name: 'name'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Updated At', name: 'updatedAt'},
        {label: 'URL', name: 'url'},
        {label: 'Developer', name: 'developer'},
        {label: 'Platform', name: 'platform'},
        {label: 'Version', name: 'version'},
        {label: 'Approx. Size', name: 'approxSize'},
        {label: 'License', name: 'license'}
      ]
    },
    Softwares: {
      icon: 'cubes',
      color: 'red',
      tableColumns: [
        {label: 'Name', name: 'name'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Updated At', name: 'updatedAt'},
        {label: 'URL', name: 'url'},
        {label: 'Developer', name: 'developer'},
        {label: 'Prog. Language', name: 'programingLanguage'},
        {label: 'Version', name: 'version'},
        {label: 'Platforms', name: 'platforms'},
        {label: 'Approx. Size', name: 'approxSize'},
        {label: 'License', name: 'license'}
      ]
    },
    THosts: {
      icon: 'exchange',
      tableColumns: [
        {label: 'IPv4', name: 'ipv4Addr'},
        {label: 'IPv6', name: 'ipv6Addr'},
        {label: 'MAC', name: 'macAddr'},
        {label: 'NIC Vendor', name: 'nicVendor'},
        {label: 'Ports', name: 'ports'},
        {label: 'OS Fingerprint', name: 'osFingerprint'},
        {label: 'Region', name: 'region'},
        {label: 'Country', name: 'country'},
        {label: 'Latitude', name: 'latitude'},
        {label: 'Longitude', name: 'longitude'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Updated At', name: 'updatedAt'}
      ]
    },
    TOperatingSystems: {
      icon: 'users',
      tableColumns: [
        {label: 'Name', name: 'name'},
        {label: 'Platform', name: 'platform'},
        {label: 'Version', name: 'version'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Updated At', name: 'updatedAt'}
      ]
    },
    TSoftwares: {
      icon: 'users',
      tableColumns: [
        {label: 'Name', name: 'name'},
        {label: 'Platform', name: 'platform'},
        {label: 'Version', name: 'version'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Updated At', name: 'updatedAt'}
      ]
    },
    TCompanies: {
      icon: 'cubes',
      tableColumns: [
        {label: 'Company', name: 'company'},
        {label: 'Description', name: 'description'},
        {label: 'Module', name: 'module'}
      ]
    },
    TDomains: {
      icon: 'home',
      tableColumns: [
        {label: 'Domain', name: 'domain'},
        {label: 'Module', name: 'module'}
      ]
    },
    TLeaks: {
      icon: 'eyedropper',
      tableColumns: [
        {label: 'Leak ID', name: 'leakId'},
        {label: 'Description', name: 'description'},
        {label: 'Source Refs', name: 'sourceRefs'},
        {label: 'Leak Type', name: 'leakType'},
        {label: 'Title', name: 'title'},
        {label: 'Import Date', name: 'importDate'},
        {label: 'Leak Date', name: 'leakDate'},
        {label: 'Attackers', name: 'attackers'},
        {label: 'Num. Of Entries', name: 'numEntries'},
        {label: 'Attack Method', name: 'attackMethod'},
        {label: 'Target Industries', name: 'targetIndustries'},
        {label: 'Pass. Hash', name: 'passwordHash'},
        {label: 'Targets', name: 'targets'},
        {label: 'Media Refs', name: 'mediaRefs'},
        {label: 'Module', name: 'module'}
      ]
    },
    TLocations: {
      icon: 'plus-circle',
      tableColumns: [
        {label: 'Latitude', name: 'latitude'},
        {label: 'Longitude', name: 'longitude'},
        {label: 'Str. Addr.', name: 'streetAddress'},
        {label: 'Module', name: 'module'}
      ]
    },
    TNetblocks: {
      icon: 'sliders',
      tableColumns: [
        {label: 'Netblock', name: 'netblock'},
        {label: 'Module', name: 'module'}
      ]
    },
    TVulns: {
      icon: 'fire',
      tableColumns: [
        {label: 'Host', name: 'host'},
        {label: 'Reference', name: 'reference'},
        {label: 'Example', name: 'example'},
        {label: 'Publish Date', name: 'publishDate'},
        {label: 'Category', name: 'category'},
        {label: 'Status', name: 'status'},
        {label: 'Module', name: 'module'}
      ]
    },
    TUsers: {
      icon: 'users',
      tableColumns: [
        {label: 'First Name', name: 'fname'},
        {label: 'Middle Name', name: 'mname'},
        {label: 'Last Name', name: 'lname'},
        {label: 'Title', name: 'title'},
        {label: 'Username', name: 'username'},
        {label: 'Email', name: 'email'},
        {label: 'Password', name: 'password'},
        {label: 'Hash', name: 'passHash'},
        {label: 'Type', name: 'type'},
        {label: 'Leak', name: 'leak'},
        {label: 'PGP Key', name: 'hasPGPKey'},
        {label: 'Region', name: 'region'},
        {label: 'Country', name: 'country'},
        {label: 'Vulnerable', name: 'vuln'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Updated At', name: 'updatedOn'}
      ]
    },
    Targets: {
      icon: 'database'
    },
    Chat: {
      icon: 'comments',
      color: 'green',
      tableColumns: [
        {label: 'Owner', name: 'owner'},
        {label: 'Email', name: 'ownerEmail'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Message', name: 'message'}
      ]
    },
    RecentActivity: {
      icon: 'list',
      color: 'green',
      tableColumns: [
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Action', name: 'action'}
      ]
    },
    MimeUpload: {
      icon: 'cloud-upload',
      color: 'yellow'
    },
    UserDataLogs: {
      icon: 'tasks',
      color: 'green'
    },
  },
  dashboard: {
    homeUrl: '/dashboard',
    skin: "black"
  }
};

if (Meteor.isClient) {
  window.AdminConfig = AdminConfig;
} else if (Meteor.isServer) {
  global.AdminConfig = AdminConfig;
}

/*Posts: {
      color: 'red',
      icon: 'pencil',
      tableColumns: [
        {
          label: 'Title',
          name: 'title'
        }, {
          label: 'User',
          name: 'owner',
          collection: 'Users'
        }
      ]
    },
    Comments: {
      color: 'green',
      icon: 'comments',
      auxCollections: ['Posts'],
      tableColumns: [
        {
          label: 'Content',
          name: 'content'
        }, {
          label: 'Post',
          name: 'doc',
          collection: 'Posts',
          collection_property: 'title'
        }, {
          label: 'User',
          name: 'owner',
          collection: 'Users'
        }
      ]
    }
*/