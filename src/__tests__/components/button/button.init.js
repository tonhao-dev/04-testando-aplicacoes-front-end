import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../../testUtils'
import Button from '../../../components/button';

describe('Button', () => {
    it('Deve renderizar um botão sem erros', () => {
        renderWithTheme(<Button>
            conteudo
        </Button>)

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toMatchSnapshot();
    });

    it('Deve executar as ações de click ao receber uma função por prop', () => {
        const onClick = jest.fn();
        renderWithTheme(<Button onClick={onClick}>conteudo</Button>);

        const button = screen.getByRole('button');
        userEvent.click(button)

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('Deve renderizar o icon passado via prop', () => {
        const icon = <span>icone</span>;
        renderWithTheme(<Button icon={icon}>conteudo</Button>);

        const icone = screen.getByText('icone');

        expect(icone).toBeInTheDocument();
    });
})