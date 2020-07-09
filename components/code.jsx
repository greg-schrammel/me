const Code = {
  Window: ({ className, ...props }) => (
    <div
      className={`bg-gray-100 rounded-xl p-10 shadow-code font-mono text-left break-words ${className}`}
      {...props}
    />
  ),
  Reserved: (props) => <span className="text-purple-500" {...props} />,
  Reserved2: (props) => <span className="text-blue-600" {...props} />,
  Var: (props) => <span className="text-blue-300" {...props} />,
  Md: (props) => <span className="text-blue-500" {...props} />,
  String: (props) => <span className="text-orange-400" {...props} />,
  Function: (props) => <span className="text-yellow-400" {...props} />,
};

export default Code;
