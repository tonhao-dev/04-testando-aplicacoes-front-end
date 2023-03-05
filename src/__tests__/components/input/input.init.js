import Input from '../../../components/input'
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../../testUtils'

describe('<Input />', () => {
    it('Deve renderizar um input de texto sem erros', () => {
        renderWithTheme(<Input placeholder="campo de texto" />);

        const input = screen.getByPlaceholderText('campo de texto');

        expect(input).toBeInTheDocument();
    });

    it('Deve exibir no input o texto digitado pelo usuario', () => {
        renderWithTheme(<Input placeholder="campo de texto" />);
        const input = screen.getByPlaceholderText('campo de texto');

        userEvent.type(input, 'texto digitado pelo usuário @ 0123');

        expect(input).toHaveValue('texto digitado pelo usuário @ 0123');
    });

    it('Deve renderizar um campo de senha sem erros', () => {
        renderWithTheme(<Input type="password" placeholder="campo de senha" />);

        const input = screen.getByPlaceholderText('campo de senha');

        expect(input).toHaveAttribute('type', 'password');
    });

    it('Deve digitar uma senha em um campo de senha', () => {
        renderWithTheme(<Input type="password" placeholder="campo de senha" />);
        const input = screen.getByPlaceholderText('campo de senha');

        userEvent.type(input, 'minha senha hypersecreta');

        expect(input).toHaveValue('minha senha hypersecreta');
    });

    it('Deve tornar o valor do campo de senha visivel', () => {
        renderWithTheme(<Input type="password" placeholder="campo de senha" />);
        const input = screen.getByPlaceholderText('campo de senha');

        const buttonShowPassword = screen.getByRole('button');
        userEvent.click(buttonShowPassword);

        expect(input).toHaveAttribute('type', 'text');
    });

    it('Deve renderizar um input do type select sem erros', () => {
        renderWithTheme(<Input type="select" options={[]} placeholder="selecione uma das opções" />);

        const select = screen.getByPlaceholderText('selecione uma das opções');

        expect(select).toBeInTheDocument();
    });

    it('Deve selecionar uma das oções do select', () => {
        const options = [
            { text: 'Administrador', value: 'ADMIN' },
            { text: 'Usuário', value: 'USER' },
        ];
        renderWithTheme(<Input type="select" options={options} placeholder="selecione uma das opções" />);
        const select = screen.getByPlaceholderText('selecione uma das opções');

        userEvent.selectOptions(select, screen.getByText('Usuário'));

        expect(select).toHaveValue('USER');
    })
})