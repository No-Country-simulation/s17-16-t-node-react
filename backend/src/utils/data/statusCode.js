export const statusCodes = [
  {
    statusCode: "1xx",
    status: "Informational responses",
    codes: [
      {
        code: "100",
        description: "Continue",
      },
      {
        code: "101",
        description: "Switching Protocols",
      },
      {
        code: "102",
        description: "Processing",
      },
      {
        code: "103",
        description: "Early Hints",
      },
      {
        code: "104 - 199",
        description: "Unassigned",
      },
    ],
  },
  {
    statusCode: "2xx",
    status: "Success",
    codes: [
      {
        code: "200",
        description: "OK",
      },
      {
        code: "201",
        description: "Created",
      },
      {
        code: "202",
        description: "Accepted",
      },
      {
        code: "203",
        description: "Non-Authoritative Information",
      },
      {
        code: "204",
        description: "No Content",
      },
      {
        code: "205",
        description: "Reset Content",
      },
      {
        code: "206",
        description: "Partial Content",
      },
      {
        code: "207",
        description: "Multi-Status",
      },
      {
        code: "208",
        description: "Already Reported",
      },
      {
        code: "209 - 225",
        description: "Unassigned",
      },
      {
        code: "226",
        description: "Instance Manipulations Used",
      },
      {
        code: "227 - 299",
        description: "Unassigned",
      },
    ],
  },
  {
    statusCode: "3xx",
    status: "Redirection",
    codes: [
      {
        code: "300",
        description: "Multiple Choices",
      },
      {
        code: "301",
        description: "Moved Permanently",
      },
      {
        code: "302",
        description: "Found",
      },
      {
        code: "303",
        description: "See Other",
      },
      {
        code: "304",
        description: "Not Modified",
      },
      {
        code: "305",
        description: "Use Proxy",
      },
      {
        code: "306",
        description: "Unused",
      },
      {
        code: "307",
        description: "Temporary Redirect",
      },
      {
        code: "308",
        description: "Permanent Redirect",
      },
      {
        code: "309-399",
        description: "Unassigned",
      },
    ],
  },
  {
    statusCode: "4xx",
    status: "Client error",
    codes: [
      {
        code: "400",
        description: "Bad Request",
      },
      {
        code: "401",
        description: "Unauthorized",
      },
      {
        code: "402",
        description: "Payment required",
      },
      {
        code: "403",
        description: "Forbidden",
      },
      {
        code: "404",
        description: "Not Found",
      },
      {
        code: "405",
        description: "Method Not Allowed",
      },
      {
        code: "406",
        description: "Not Acceptable",
      },
      {
        code: "407",
        description: "Proxy Authentication Required",
      },
      {
        code: "408",
        description: "Request Timeout",
      },
      {
        code: "409",
        description: "Conflict",
      },
      {
        code: "410",
        description: "Gone",
      },
      {
        code: "411",
        description: "Length Required",
      },
      {
        code: "412",
        description: "Precondition Failed",
      },
      {
        code: "413",
        description: "Payload Too Large",
      },
      {
        code: "414",
        description: "URI Too Long",
      },
      {
        code: "415",
        description: "Unsupported Media Type",
      },
      {
        code: "416",
        description: "Range Not Satisfiable",
      },
      {
        code: "417",
        description: "Expectation Failed",
      },
      {
        code: "418 - 420",
        description: "Unassigned",
      },
      {
        code: "421",
        description: "Misdirected Request",
      },
      {
        code: "422",
        description: "Unprocessable Entity",
      },
      {
        code: "423",
        description: "Locked",
      },
      {
        code: "424",
        description: "Failed Dependency",
      },
      {
        code: "425",
        description: "Too Early",
      },
      {
        code: "426",
        description: "Upgrade Required",
      },
      {
        code: "427",
        description: "Unassigned",
      },
      {
        code: "428",
        description: "Precondition Required",
      },
      {
        code: "429",
        description: "Too Many Requests",
      },
      {
        code: "430",
        description: "Unassigned",
      },
      {
        code: "431",
        description: "Request Header Fields Too Large",
      },
      {
        code: "432 - 450",
        description: "Unassigned",
      },
      {
        code: "451",
        description: "Unavailable For Legal Reasons",
      },
      {
        code: "452 - 499",
        description: "Unassigned",
      },
    ],
  },
  {
    statusCode: "5xx",
    status: "Server error",
    codes: [
      {
        code: "500",
        description: "Internal Server Error",
      },
      {
        code: "501",
        description: "Not Implemented",
      },
      {
        code: "502",
        description: "Bad Gateway",
      },
      {
        code: "503",
        description: "Service Unavailable",
      },
      {
        code: "504",
        description: "Gateway Timeout",
      },
      {
        code: "505",
        description: "HTTP Version Not Supported",
      },
      {
        code: "506",
        description: "Variant Also Negotiates",
      },
      {
        code: "507",
        description: "Insufficient Storage",
      },
      {
        code: "508",
        description: "Loop Detected",
      },
      {
        code: "510",
        description: "Not Extended",
      },
      {
        code: "511",
        description: "Network Authentication Required",
      },
      {
        code: "512 - 599",
        description: "Unassigned",
      },
    ],
  },
];