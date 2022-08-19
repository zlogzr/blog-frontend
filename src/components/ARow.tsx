import styled from '@emotion/styled'

const ARow = styled.div<{
  between?: boolean
  gap?: number
  marginBottom?: number
}>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.between ? 'space-between' : undefined)};
  margin-bottom: ${props => props.marginBottom + 'rem'};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${props => (props.gap ? `${props.gap}rem` : '2rem')};
  }
`

export default ARow
