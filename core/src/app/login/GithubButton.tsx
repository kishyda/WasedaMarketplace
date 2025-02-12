import { Button, ButtonProps } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import { signIn } from 'next-auth/react';

export function GithubButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <Button onClick={() => signIn("github")} leftSection={<GithubIcon size={16} color="#00ACEE" />} variant="default" {...props} />
  );
}
