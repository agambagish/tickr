interface Props {
  params: Promise<{ eventId: string }>;
}

export default async function Page({ params }: Props) {
  const _params = await params;

  return <p>{_params.eventId}</p>;
}
