export default function SmallError({ text }: { text: string | undefined }) {
  return <small className="text-red-400">{text}</small>;
}
