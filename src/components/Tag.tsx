import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`)
  }
  return <StyledWrapper>{children}</StyledWrapper>
}

export default Tag

const StyledWrapper = styled.div`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 50px;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray10};
  background-color: ${({ theme }) => theme.colors.gray5};
  cursor: pointer;

  white-space: nowrap; // ✅ 줄바꿈 방지
  // text-overflow: ellipsis; // ✅ 너무 길면 말줄임표
  // overflow: hidden; // ✅ 넘치는 텍스트 숨김
  // max-width: 100%; // ✅ 줄 바꿈 방지를 위한 안전망
`
